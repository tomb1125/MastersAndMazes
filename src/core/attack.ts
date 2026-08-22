import { Activity, StatChange } from "./activity.js"
import { Compensation } from "../modifiers/compensation.js"
import { Utils } from "./utils.js"
import { ModifierFactory } from "./../modifiers/modifierFactory.js"
import { CanAffectModifier } from "./canAffectModifier.js"
import { Ability } from "./ability.js"
import { DescriptiveNumber } from "../components/descriptiveNumber.js"
import { DescriptiveNumberFactory } from "../components/descriptiveNumberFactory.js"
import { HasWeigth } from "./hasWeigth.js"
import { AffectsWeight } from "./affectsWeight.js"
import { AttackCompensationService } from "./attackCompensationService.js"
import { Vendor } from "./vendor.js"

export class Attack extends Activity implements CanAffectModifier, HasWeigth {
  static ALTERATION_CHANCE: Map<number, number> = new Map([
    [0.7, 1],
    [1, 2],
    [1.2, 3],
    [1.4, 4]
  ]);

  damage: DescriptiveNumber;
  attackType: Attack.AttackType;
  coreDescription: String;
  compensation: Compensation;
  weight: (x?: AffectsWeight) => number = () => {return 1};


  constructor(otherName?: string) {
    super(otherName);
    this.cooldown = Ability.Cooldown.Encounter;
    this.type = Ability.Type.Attack;
  }

  generate() {
    const compensation = new AttackCompensationService(this);

    this.initAlterations();
    compensation.compensate();
  }

  //TODO split modifiers and improvements
  private initAlterations() {
    if(this.modifiers) {
      return;
    }

    this.modifiers = [];

    if(!Vendor.altersAbilities()) {
      return;
    }

    const modifiers = new ModifierFactory(this);
    const numbers = new DescriptiveNumberFactory(this)
      .filter((x: DescriptiveNumber) => x.type === DescriptiveNumber.Type.Common);

    let alterations: number = this.rollAlterationCount();

    if(alterations > 0 && this.rollDescriptiveDamage(numbers, modifiers)) {
      alterations--;
    }

    if(alterations > 0) {
      this.modifiers = modifiers.get(alterations);
    }
  }

  private rollAlterationCount(): number {
    const roll = Utils.random();
    let count: number = -1;

    Attack.ALTERATION_CHANCE.forEach((value: number, key: number) => {
      if(roll <= key && count === -1) {
        count = value;
      }
    });

    return count === -1 ? 0 : count;
  }

  // The two pools are weighed against each other rather than rolled against a fixed
  // chance, so the split follows what the vendor stocks: a shop deep in modifiers
  // flavours the damage far less often than one whose modifier shelf is nearly bare.
  private rollDescriptiveDamage(numbers: DescriptiveNumberFactory, modifiers: ModifierFactory): boolean {
    if(this.damage.description) {
      return false;
    }

    const numberWeight: number = numbers.getTotalWeight();
    const modifierWeight: number = modifiers.getTotalWeight();

    if(numberWeight <= 0 || Utils.random() * (numberWeight + modifierWeight) >= numberWeight) {
      return false;
    }

    this.damage = numbers.get(1)[0];

    return true;
  }

  public getDescription(longDescription?: boolean): string { //TODO rework, incorporate descriptive numbers
    const stats: [string, string, StatChange?][] = [
      ['Chance', Math.ceil(this.chance * 100) + '%', this.compensationOf('Chance')],
      ['Damage', this.damage.description ? this.damage.getInlineValue() : Utils.valueToDiceRoll(this.damage.getValue()), this.compensationOf('Damage')],
      ['Mana', '' + this.manaCost, this.compensationOf('Mana')],
      ['Range', Ability.Range[this.range]],
      ['Attack Type', Attack.AttackType[this.attackType]],
      ['Cooldown', Ability.Cooldown[this.cooldown]],
      ['Elements', this.elements.map(element => Ability.Element[element]).join(', ')]
    ];

    return this.renderCard(
      'attack',
      this.generateName(),
      stats,
      this.coreDescription ? '' + this.coreDescription : '',
      longDescription
    );
  }

  protected override getDescriptiveNumbers(): [string, DescriptiveNumber][] {
    return [
      ['Damage', this.damage]
    ];
  }

  private compensationOf(stat: string): StatChange {
    return this.compensation && this.compensation.property === stat ? this.compensation : undefined;
  }

  private generateName(): string {

    const parts: string[] = [];

    if(this.damage.prefix) {
      parts.push(this.damage.prefix);
    }

    this.modifiers.forEach(mod => {
      if(mod.namePrefix) {
        parts.push(mod.namePrefix);
      }
    });

    parts.push(this.name);

    return parts.join(' ');

  }
}

export namespace Attack {
  export enum AttackType {
    Weapon,
    Spell
  }
}