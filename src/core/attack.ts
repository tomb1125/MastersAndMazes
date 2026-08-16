import { Activity } from "./activity.js"
import { Utils } from "./utils.js"
import { ModifierFactory } from "./../modifiers/modifierFactory.js"
import { CanAffectModifier } from "./canAffectModifier.js"
import { Ability } from "./ability.js"
import { DescriptiveNumber } from "../components/descriptiveNumber.js"
import { CharacterContext } from "./characterContext.js"
import { DescriptiveNumberFactory } from "../components/descriptiveNumberFactory.js"
import { HasWeigth } from "./hasWeigth.js"
import { AffectsWeight } from "./affectsWeight.js"

export class Attack extends Activity implements CanAffectModifier, HasWeigth {
  static ALTERATION_CHANCE: Map<number, number> = new Map([
    [0.7, 1],
    [1, 2],
    [1.2, 3],
    [1.4, 4]
  ]);

  damage: DescriptiveNumber;
  subtype: Attack.Subtype;
  coreDescription: String;
  weight: (x?: AffectsWeight) => number = () => {return 1};


  constructor(otherName?: string) {
    super(otherName);
    this.cooldown = Ability.Cooldown.Encounter;
    this.type = Ability.Type.Attack;
  }

  generate() {
    this.initAlterations();
    this.finalAdjustments();
    this.compensate();
  }

  public getPower(): number {
    let power = 
      (this.damage.getValue() *      
      this.chance                
      / Utils.getRangeCoeficient(this.range)
      / Utils.getDPSCoefficient(this.chance)
      - ModifierFactory.getDPSBonus(this.modifiers, this)
      ) / ModifierFactory.getDPSMultiplier(this.modifiers, this)
      - CharacterContext.getDPS() 
      - this.manaCost;

    return power;
     
  }

  //TODO split modifiers and improvements
  private initAlterations() {
    if(this.modifiers) {
      return;
    }

    this.modifiers = [];

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
    const numberWeight: number = numbers.getTotalWeight();
    const modifierWeight: number = modifiers.getTotalWeight();

    if(numberWeight <= 0 || Utils.random() * (numberWeight + modifierWeight) >= numberWeight) {
      return false;
    }

    this.damage = numbers.get(1)[0];

    return true;
  }

  private finalAdjustments() {
    if(this.subtype === Attack.Subtype.Spell) { //TODO allow for disabling compensation
      //if(this.damage.description != null) {
        this.damage.addBonus(1);
      //}

      this.chance = Math.min(1, this.chance + 0.1);

    }
    
  }

  public compensate() {
      if(this.damage.getValue() < 3.5 && this.damage.description == undefined) {
        this.damage = new DescriptiveNumber(3.5);
      }
      
      const maxChance = 0.9;

      if(this.chance > maxChance) {
        this.chance = maxChance;
      }

      let tempMana: number = Math.ceil(this.getPower() - 0.00001);

      if(this.manaCost + tempMana < 0) {
        this.chance += 0.1;
        if(this.chance > maxChance) {
          this.damage.addBonus(1);
          this.damage.compensate(); ///= new DescriptiveNumber(this.damage.getValue()+1); //TODO allow DescriptiveNumbers to get static bonuses
        }

        this.compensate();

      } else if(this.manaCost + tempMana > 10 && this.chance > 0.4) {
        this.chance -= 0.1;
        this.compensate();
      } else {
        this.manaCost += tempMana;
      }

  }

  public getDescription(longDescription?: boolean): string { //TODO rework, incorporate descriptive numbers
    const stats: [string, string][] = [
      ['Chance', Math.ceil(this.chance * 100) + '%'],
      ['Damage', this.damage.description ? this.damage.getInlineValue() : Utils.valueToDiceRoll(this.damage.getValue())],
      ['Mana', '' + this.manaCost],
      ['Range', Ability.Range[this.range]],
      ['Attack Type', Attack.Subtype[this.subtype]],
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
  export enum Subtype {
    Weapon,
    Spell
  }
}