import { Activity } from "./activity"
import { Utils } from "./utils"
import { abilityType } from "./abilityType"
import { Modifier } from "./../modifiers/modifier"
import { modifiers } from "./../modifiers/modifiersSingleton"

export class Attack extends Activity {
  static MODIFIER_CHANCE: Map<number, number> = new Map([
    [0.2, 0],
    [0.7, 1],
    [1, 2],
    [1.1, 3]
  ]);

  modifiers: Modifier[];
  damage: number;

 
  constructor(otherName?: string) {
    super(otherName)
  }

  generate() {
    this.initType();
    this.initModifiers();
    this.initChance();
    this.initRange();
    this.initDamage();
    this.compensate();
  }

  private initType() {
    if(!this.type) {
      if(Utils.random() > 0.5) {
        this.type = abilityType.Attack;
      } else {
        this.type = abilityType.Spell;
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
        this.getTrueDPS() 
        * this.getRangeCoeficient()
        * Utils.getDPSCoefficient(this.chance)
        / this.chance;
    }
  }

  private initModifiers() {
    const roll = Utils.random();
    let numberOfModifiers: number = -1;
    Attack.MODIFIER_CHANCE.forEach((value: number, key: number) => {


      if(roll <= key && numberOfModifiers === -1) {
        numberOfModifiers = value;
      }

      if(numberOfModifiers > 0) {
        const shuffled = modifiers.sort(() => 0.5 - Utils.random());
        this.modifiers = shuffled.slice(0, numberOfModifiers);
      } else {
        this.modifiers = [];
      }
    });
  }

  private compensate() {
      if(!this.manaCost) {
        this.manaCost = Math.ceil(this.getPower() - 0.00001);
      }
  }

  public getRangeCoeficient(): number {
    return (16 + this.range )/(15 + 2 * this.range)
  }

  public getPower(): number {
    let power = 
      this.damage * this.chance 
      / this.getRangeCoeficient()
      / Utils.getDPSCoefficient(this.chance)
      -this.getTrueDPS();

    if(power) return power;
    return 0;
     
  }

  private getTrueDPS(): number {
    let dps: number = Utils.DPS;
    this.modifiers.forEach(m => {
      if(m.powerBonus) {
        dps += m.powerBonus;
      }
    });

    
    this.modifiers.forEach(m => {
      if(m.powerMultiplier) {
        dps *= m.powerMultiplier;
      }
    })

    return dps;
  }
}