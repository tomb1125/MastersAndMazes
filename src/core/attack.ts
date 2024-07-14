import { Activity } from "./activity"
import { Utils } from "./utils"
import { Modifier } from "./../modifiers/modifier"
import { ModifierFactory } from "./../modifiers/modifierFactory"
import { PowerModifier } from "./powerModifier"
import { Ability } from "./ability"

export class Attack extends Activity implements PowerModifier {
  static MODIFIER_CHANCE: Map<number, number> = new Map([
    [0.1, 0],
    [0.7, 1],
    [1, 2],
    [1.1, 3],
    [1.4, 4]
  ]);

  modifiers: Modifier[];
  damage: number;

 
  constructor(otherName?: string) {
    super(otherName)
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
      console.log(roll);
      if(roll > 0.5) {      
        this.type = Activity.Type.Attack;
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
    if(!this.damage) {
      this.damage = 
        this.manaCost +
        this.getTrueDPS() 
        * Utils.getRangeCoeficient(this.range)
        * Utils.getDPSCoefficient(this.chance)
        / this.chance;
    }
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
      this.damage += Math.ceil(Utils.random()*2.1);
      this.chance = Math.min(1, this.chance + 0.1);
      this.range = (this.range === 1 ? 0 : this.range) + 5;
    }
  }

  private compensate() {
      if(this.damage < 0) {
        this.damage = 0;
      }
      
      if(!this.manaCost) {
        this.manaCost += Math.ceil(this.getPower() - 0.00001);
      }
  }

  public getPower(): number {
    let power = 
      this.damage * this.chance 
      / Utils.getRangeCoeficient(this.range)
      / Utils.getDPSCoefficient(this.chance)
      -this.getTrueDPS()
      -this.manaCost;

    if(power) return power;
    return 0;
     
  }

  private getTrueDPS(): number {
    let dps: number = Utils.DPS;

    this.modifiers.forEach(m => {
      if(m.powerMultiplier) {
        dps *= m.powerMultiplier(this);
      }
    })

    this.modifiers.forEach(m => {
      if(m.powerBonus) {
        dps += m.powerBonus(this);
      }
    });

    return dps;
  }

  public getDescription(): string {
    
    return '' +
      'Name: ' + this.generateName() +
      '\nChance: ' + Math.ceil(this.chance * 100) + '%' +
      '\nDamage: ' + Utils.valueToDiceRoll(this.damage) +
      '\nMana Cost: ' + this.manaCost +
      '\nRange: ' + this.range +
      '\nModifiers: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
      '\nType: ' + Ability.Type[this.type] + 
      '\nDescription: ' + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1);

  }

  private generateName(): string { 
    const attackPortion: string = this.type === Activity.Type.Attack ? [
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