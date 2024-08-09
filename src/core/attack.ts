import { Activity } from "./activity"
import { Utils } from "./utils"
import { ModifierFactory } from "./../modifiers/modifierFactory"
import { PowerModifier } from "./powerModifier"
import { Ability } from "./ability"
import { DescriptiveNumber } from "../components/descriptiveNumber"
import { CharacterContext } from "./characterContext"
import { DescriptiveNumberFactory } from "../components/descriptiveNumberFactory"
import { Modifier } from "../modifiers/modifier"

export class Attack extends Activity implements PowerModifier {
  static MODIFIER_CHANCE: Map<number, number> = new Map([
    [0.1, 0],
    [0.7, 1],
    [1, 2],
    [1.2, 3],
    [1.4, 4]
  ]);

  damage: DescriptiveNumber;

 
  constructor(otherName?: string) {
    super(otherName);
    this.cooldown = Ability.Cooldown.Encounter;
  }

  generate() {
    this.initMana();
    this.initType();
    this.initModifiers();
    this.initChance();
    this.initRange();
    this.initDamage();
    this.finalAdjustments();
    this.compensate();
  }

  private initMana() {
    this.manaCost = 0;
  }

  private initType() {
    if(this.type === undefined) {
      const roll = Utils.random();
      if(roll > 0.5) {      
        this.type = Activity.Type.Weapon;
      } else {
        this.type = Activity.Type.Spell;
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
      if(this.type === Ability.Type.Weapon) {
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
        this.chance = this.chance * tempDamage / this.damage.getValue(); //TODO this calculation is wrong when descriptive number is applied and we have modifier
      } else {

      }

    }
  }

  public getTempDamage(): number {
    return (
      (
        this.manaCost +
        CharacterContext.getDPS()
      ) * this.getDPSMultiplier()
      + this.getDPSBonus()
    )
    * Utils.getRangeCoeficient(this.range)
    * Utils.getDPSCoefficient(this.chance)
    / this.chance 
  }

  public getPower(): number {
    let power = 
      (this.damage.value *      
      this.chance                
      / Utils.getRangeCoeficient(this.range)
      / Utils.getDPSCoefficient(this.chance)
      - this.getDPSBonus()
      ) / this.getDPSMultiplier()
      - CharacterContext.getDPS() 
      - this.manaCost;

    return power;
     
  }

  //TODO split modifiers and improvements
  private initModifiers() {
    const roll = Utils.random();
    let numberOfModifiers: number = -1;
    if(!this.modifiers) {
      Attack.MODIFIER_CHANCE.forEach((value: number, key: number) => { //TODO allow init of one of many modifiers.
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
    if(this.type === Ability.Type.Spell) { //TODO allow for disabling compensation
      if(this.damage.description != null) {
        this.damage.value += Math.ceil(Utils.random()*2.1);
      }
      
      this.chance = Math.min(1, this.chance + 0.1);
      this.range = (this.range === 1 ? 0 : this.range) + 5;
    }
    
  }

  private compensate() {
      if(this.damage.value < 3.5 && this.damage.description == undefined) {
        this.damage.value = 3.5;
      }
      
      if(this.chance > 1) {
        this.chance = 1;
      }

      let tempMana: number = Math.ceil(this.getPower() - 0.00001);

      if(tempMana < 0) {
        this.chance += 0.1;
        if(this.chance > 1) {
          this.damage = new DescriptiveNumber(this.damage.getValue()+1);
        }

        this.compensate();
      }

      this.manaCost += tempMana;
  }


  private getDPSBonus(): number {
    let dps: number = 0;

    this.modifiers.forEach(m => {
      if(m.powerBonus) {
        dps += m.powerBonus(this);
      }
    });

    return dps;
  }
  
  private getDPSMultiplier(): number {
    let dps: number = 1

    this.modifiers.forEach(m => {
      if(m.powerMultiplier) {
        dps *= m.powerMultiplier(this); 
      }
    })

    return dps;
  }

  public getDescription(): string { //TODO rework, incorporate descriptive numbers
    
    return '' +
      '<b>Name: ' + this.generateName() +
      '</b><br><b>Chance</b>: ' + Math.ceil(this.chance * 100) + '%' +
      '<br><b>Damage</b>: ' + (this.damage.description ? this.damage.getDescription() : Utils.valueToDiceRoll(this.damage.value)) +
      '<br><b>Mana Cost</b>: ' + this.manaCost +
      '<br><b>Range</b>: ' + this.range +
      '<br><b>Modifiers</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
      '<br><b>Type</b>: ' + Ability.Type[this.type] + 
      '<br><b>Description</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1) +
      '<br><b>Cooldown</b>: ' + Ability.Cooldown[this.cooldown];

  }

  private generateName(): string { 
    const attackPortion: string = this.type === Activity.Type.Weapon ? [
      'Slam',
      'Stab',
      'Strike',
      'Slash',
      'Pummel'
    ].sort(() => 0.5 - Utils.random())[0] : '';

    const spellPortion: string = this.type === Activity.Type.Spell ? [
      'Blast',
      'Ray',
      'Missile',
      'Dart',
      'Beam'
    ].sort(() => 0.5 - Utils.random())[0] : '';

    const randomPortion: string = [
      this.chance > 0.75 ? 'Precise ' : '',
      this.chance > 0.75 ? 'Accurate ' : '',
      this.chance < 0.3 ? 'Heavy ' : '',
      this.chance < 0.3 ? 'Slow ' : '',
      this.modifiers.length === 0 ? 'Boring ' : '',
      this.modifiers.length === 0 ? 'Basic ' : '',
      this.modifiers.length === 0 ? 'Nothing-To-Write-Home-About ' : '',
      this.manaCost > 8 ? 'Costly ' : '',
      this.manaCost > 8 ? 'Exhausting ' : '',
      '',
      '',
      'Gruesome ',
      'Deadly ',
      'Awesome ',
      'Flashy ',
      'Outstanding ',
      'Ruthless '
    ].sort(() => 0.5 - Utils.random())[0]

    return this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.namePrefix; }, '').slice(1) +
     (this.modifiers.length > 0 ? ' ' : '') +
     randomPortion +
     attackPortion +
     spellPortion;

  }
}