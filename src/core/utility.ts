import { AbilityObject } from "../components/abilityObject";
import { DescriptiveNumber } from "../components/descriptiveNumber";
import { Modifier } from "../modifiers/modifier";
import { repeatableModifier } from "../modifiers/modifiersRepository/repeatableModifier";
import { Ability } from "./ability";
import { Activity } from "./activity";
import { AffectsWeight } from "./affectsWeight";
import { HasWeigth } from "./hasWeigth";
import { CanAffectModifier } from "./canAffectModifier";
import { ModifierFactory } from "../modifiers/modifierFactory";
import { Utils } from "./utils";

export class Utility extends Activity implements CanAffectModifier, HasWeigth {
    weight = (x?: AffectsWeight) => {return 1};
    objects: AbilityObject[];
    duration: DescriptiveNumber;

    static MODIFIER_CHANCE: Map<number, number> = new Map([
      [0.1, 0],
      [0.7, 1],
      [1, 2],
    ]);
  
    constructor(otherName?: string) {
        super(otherName);
        this.cooldown = Ability.Cooldown.Daily;
        this.objects = [] as AbilityObject[];
        //this.modifiers = [] as Modifier[];
        this.modifiers = Utils.getNumberFromValueMap(Utility.MODIFIER_CHANCE, new ModifierFactory(this)) as Modifier[];
        this.type = Ability.Type.Utility;
    }

    public getDescription(): string {

      return '' +
      '<b>Name: ' + this.generateName() +
      '<br>Chance</b>: ' + Math.ceil(this.chance * 100) + '%' +
      '<br><b>Modifiers</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
    //  '\nType: ' + Ability.Type[this.type] + 
      '<br><b>Description</b>: ' + this.description + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1) +
      '<br><b>Cooldown</b>: ' + Ability.Cooldown[this.cooldown];      
    }

    public generateName(): string {
      return this.objects.reduce(function (sum, mod) { return sum + ' ' + (mod.prefix === undefined ? mod.name : mod.prefix); }, '') + ' ' + this.name;
    }

    protected compensate(): void {
      const repeat: repeatableModifier = new repeatableModifier();
      if(this.chance > 1) {
        let tempRepeat = Math.ceil(this.chance);
        this.chance/=tempRepeat;

        repeat.setValue(tempRepeat);
        this.modifiers.push(repeat);        
      }
    }
}