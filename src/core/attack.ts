import { Activity } from "./activity"
import { Utils } from "./utils"
import { ModifierFactory } from "./../modifiers/modifierFactory"
import { CanAffectModifier } from "./canAffectModifier"
import { Ability } from "./ability"
import { DescriptiveNumber } from "../components/descriptiveNumber"
import { CharacterContext } from "./characterContext"
import { DescriptiveNumberFactory } from "../components/descriptiveNumberFactory"
import { Modifier } from "../modifiers/modifier"

export class Attack extends Activity implements CanAffectModifier {
  static MODIFIER_CHANCE: Map<number, number> = new Map([
    [0.1, 0],
    [0.7, 1],
    [1, 2],
    [1.2, 3],
    [1.4, 4]
  ]);

  damage: DescriptiveNumber;
  attackTemplate: String;
  target: DescriptiveNumber;
  subtype: Attack.Subtype;

 
  constructor(otherName?: string) {
    super(otherName);
    this.cooldown = Ability.Cooldown.Encounter;
    this.type = Ability.Type.Attack;
  }

  generate() {
    this.initCommon();
    this.initType();
    this.initModifiers();
    this.initChance();
    this.initRange();
    this.initDamage();
    this.finalAdjustments();
    this.compensate();
  }

  private initCommon() {
    this.manaCost = 0;
    this.attackTemplate = 'Standard';
    this.target = new DescriptiveNumber(1);
  }

  private initType() {
    if(this.subtype === undefined) {
      const roll = Utils.random();
      if(roll > 0.5) {      
        this.subtype = Attack.Subtype.Weapon;
      } else {
        this.subtype = Attack.Subtype.Spell;
      }
    }
  }

  private initChance() {
    if(!this.chance) {
      this.chance = (Math.floor(Utils.random() * 13) + 4)/20;
    }
  }

  private initRange() {
    if(!this.range) {
      if(this.subtype === Attack.Subtype.Weapon) {
        this.range = 1;
      } else {
        this.range = (Math.ceil(Utils.random() * 3) * 5)
      }
    }
  }
  
  private initDamage() {
    let tempDamage = this.getTempDamage();
      
    if(!this.damage && Utils.random() < Utils.ATTACK_DESCRIPTIVE_NUMBER_CHANCE) {
      this.damage = new DescriptiveNumberFactory(this).filter((x: DescriptiveNumber) => x.type === DescriptiveNumber.Type.Common).get(1)[0];
    }

    //if((this.damage && this.damage?.getValue() < 5) || (!this.damage && tempDamage < 5)) {
    //  this.modifiers.push(new ModifierFactory().filter(mod => mod.modifierType === Modifier.Type.Constraint && !this.modifiers.map(mod => mod.name).includes(mod.name)).get(1, this)[0]);
    //}

    if(!this.damage) { 
      this.damage = new DescriptiveNumber(tempDamage);
    } else {
      if(tempDamage > 0) {
        this.chance = this.chance * tempDamage / this.damage.getValue();
      } else {

      }

    }
  }

  public getTempDamage(): number {
    return (
      (
        this.manaCost +
        CharacterContext.getDPS()
      ) * ModifierFactory.getDPSMultiplier(this.modifiers, this)
      + ModifierFactory.getDPSBonus(this.modifiers, this)
    )
    * Utils.getRangeCoeficient(this.range)
    * Utils.getDPSCoefficient(this.chance)
    / this.chance 
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
  private initModifiers() {
    const roll = Utils.random();
    let numberOfModifiers: number = -1;
    if(!this.modifiers) {
      Attack.MODIFIER_CHANCE.forEach((value: number, key: number) => {
        if(roll <= key && numberOfModifiers === -1) {
          numberOfModifiers = value;
        }

        if(numberOfModifiers > 0) {
          this.modifiers = new ModifierFactory(this).get(numberOfModifiers);
        } else {
          this.modifiers = [];
        }
      });
    }
  }

  private finalAdjustments() {
    if(this.subtype === Attack.Subtype.Spell) { //TODO allow for disabling compensation
      //if(this.damage.description != null) {
        this.damage.addBonus(1);
      //}
      
      this.chance = Math.min(1, this.chance + 0.1);
      this.range = (this.range === 1 ? 0 : this.range) + 5;
    }
    
  }

  private compensate() {
      if(this.damage.getValue() < 3.5 && this.damage.description == undefined) {
        this.damage = new DescriptiveNumber(3.5);
      }
      
      if(this.chance > 1) {
        this.chance = 1;
      }

      let tempMana: number = Math.ceil(this.getPower() - 0.00001);

      if(this.manaCost + tempMana < 0) {
        this.chance += 0.1;
        if(this.chance > 1) {
          this.damage.addBonus(1);
          this.damage.compensate(); ///= new DescriptiveNumber(this.damage.getValue()+1); //TODO allow DescriptiveNumbers to get static bonuses
        }

        this.compensate();

      } else {
        this.manaCost += tempMana;
      }

  }

  public getDescription(): string { //TODO rework, incorporate descriptive numbers
    return '' +
      '<b>Name: ' + this.generateName() +
      '</b><br><b>Chance</b>: ' + Math.ceil(this.chance * 100) + '%' +
      '<br><b>Damage</b>: ' + (this.damage.description ? this.damage.getDescription() : Utils.valueToDiceRoll(this.damage.getValue())) +
      '<br><b>Mana Cost</b>: ' + this.manaCost +
      '<br><b>Range</b>: ' + this.range +
      '<br><b>Modifiers</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
      '<br><b>Description</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1) +
      '<br><b>Type</b>: ' + Attack.Subtype[this.subtype] + 
      '<br><b>Cooldown</b>: ' + Ability.Cooldown[this.cooldown];

  }

  private generateName(): string { 
    const attackPortion: string = this.subtype === Attack.Subtype.Weapon ? [
      'Basic Attack'
    ].sort(() => 0.5 - Utils.random())[0] : '';

    const spellPortion: string = this.subtype === Attack.Subtype.Spell ? [
      'Basic Bolt'
    ].sort(() => 0.5 - Utils.random())[0] : '';


    return this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.namePrefix; }, '').slice(1) +
     (this.modifiers.length > 0 ? ' ' : '') +
     attackPortion +
     spellPortion;

  }

}


export namespace Attack {
  export enum Subtype {
    Weapon,
    Spell
  }
}