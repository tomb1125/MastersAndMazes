import { Activity } from "./activity"
import { Utils } from "./utils"
import { Modifier } from "./../modifiers/modifier"
import { ModifierFactory } from "./../modifiers/modifierFactory"
import { PowerModifier } from "./powerModifier"
import { Ability } from "./ability"
import { DescriptiveNumber } from "../components/descriptiveNumber"
import { CharacterContext } from "./characterContext"

export class Attack extends Activity implements PowerModifier {
  static MODIFIER_CHANCE: Map<number, number> = new Map([
    [0.1, 0],
    [0.7, 1],
    [1, 2],
    [1.1, 3],
    [1.4, 4]
  ]);

  modifiers: Modifier[];
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
      if(Math.random() > 0.5) {
        this.range = 1;
      } else {
        this.range = (Math.ceil(Utils.random() * 4) * 5)
      }
    }
  }
  
  private initDamage() {
    let tempDamage = 
      (
        (
          this.manaCost +
          CharacterContext.getDPS()
        ) * this.getDPSMultiplier()
        - this.getDPSBonus()
      )
      * Utils.getRangeCoeficient(this.range)
      * Utils.getDPSCoefficient(this.chance)
      / this.chance 
      
  
    if(!this.damage) { //TODO here get common descriptive number
      this.damage = new DescriptiveNumber(tempDamage);
    } else {
      this.chance = this.chance * tempDamage / this.damage.getValue();
    }
  }

  public getPower(): number {
    let power = 
      (this.damage.value *      
      this.chance                
      / Utils.getRangeCoeficient(this.range)
      / Utils.getDPSCoefficient(this.chance)
      + this.getDPSBonus()
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
          this.modifiers = ModifierFactory.get(numberOfModifiers);
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
      if(this.damage.value < 2.5 && this.damage.description == undefined) {
        this.damage.value = 2.5;
      }

      this.manaCost += Math.ceil(this.getPower() - 0.00001);
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

  public getDescription(): string {
    
    return '' +
      'Name: ' + this.generateName() +
      '\nChance: ' + Math.ceil(this.chance * 100) + '%' +
      '\nDamage: ' + (this.damage.description ? this.damage.getDescription() : Utils.valueToDiceRoll(this.damage.value)) +
      '\nMana Cost: ' + this.manaCost +
      '\nRange: ' + this.range +
      '\nModifiers: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
      '\nType: ' + Ability.Type[this.type] + 
      '\nDescription: ' + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1);

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