import { AbilityObject } from "../components/abilityObject";
import { DescriptiveNumber } from "../components/descriptiveNumber";
import { Modifier } from "../modifiers/modifier";
import { repeatableModifier } from "../modifiers/modifiersRepository/repeatableModifier";
import { Ability } from "./ability";
import { Activity } from "./activity";
import { AffectsWeight } from "./affectsWeight";
import { HasWeigth } from "./hasWeigth";
import { CanAffectModifier } from "./canAffectModifier";

export class Utility extends Activity implements CanAffectModifier, HasWeigth {
    weight = (x?: AffectsWeight) => {return 1};
    objects: AbilityObject[];
    duration: DescriptiveNumber;

    constructor(otherName?: string) {
        super(otherName);
        this.cooldown = Ability.Cooldown.Daily;
        this.objects = [] as AbilityObject[];
        this.modifiers = [] as Modifier[];
        this.type = Ability.Type.Utility;
    }

    public getDescription(): string {

      return '' +
      'Name: ' + this.generateName() +
      '\nChance: ' + Math.ceil(this.chance * 100) + '%' +
      '\nModifiers: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
    //  '\nType: ' + Ability.Type[this.type] + 
      '\nDescription: ' + this.description + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1) +
      '\nCooldown: ' + Ability.Cooldown[this.cooldown];      
    }

    public generateName(): string {
      return this.objects.reduce(function (sum, mod) { return sum + ' ' + (mod.prefix === undefined ? mod.name : mod.prefix); }, '') + ' ' + this.name;
    }

    protected compensate(): void {
      const repeat: repeatableModifier = new repeatableModifier();
      if(this.chance > 5) {
        repeat.setValue(10);
        this.chance/=10;
        this.chance = Math.min(1, this.chance);
        this.modifiers.push(repeat);        

        console.error('reaching top end of chance conpensation')
      } else if(this.chance > 4) {
        repeat.setValue(8);
        this.chance/=8;
        this.modifiers.push(repeat);  
      } else if(this.chance > 3) {
        repeat.setValue(6);
        this.chance/=6;
        this.modifiers.push(repeat);  
      } else if(this.chance > 2) {
        repeat.setValue(4);
        this.chance/=4;
        this.modifiers.push(repeat);  
      } else if(this.chance > 1) {
          repeat.setValue(2);
          this.chance/=2;
          this.modifiers.push(repeat);
      }
    }
}