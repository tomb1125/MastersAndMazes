import { AbilityObject } from "../components/abilityObject.js";
import { DescriptiveNumber } from "../components/descriptiveNumber.js";
import { Modifier } from "../modifiers/modifier.js";
import { repeatableModifier } from "../modifiers/modifiersRepository/repeatableModifier.js";
import { Ability } from "./ability.js";
import { Activity } from "./activity.js";
import { AffectsWeight } from "./affectsWeight.js";
import { HasWeigth } from "./hasWeigth.js";
import { CanAffectModifier } from "./canAffectModifier.js";
import { ModifierFactory } from "../modifiers/modifierFactory.js";
import { Utils } from "./utils.js";
import { CharacterContext } from "./characterContext.js";
import { Vendor } from "./vendor.js";

export class Utility extends Activity implements CanAffectModifier, HasWeigth {
    weight = (x?: AffectsWeight) => {return 1};
    objects: AbilityObject[];
    duration: DescriptiveNumber;
    value: DescriptiveNumber;

    static MODIFIER_CHANCE: Map<number, number> = new Map([
      [0.3, 0],
      [0.8, 1],
      [1, 2], //TODO restore this
    ]);
      
    constructor(otherName?: string) {
        super(otherName);
        this.cooldown = Ability.Cooldown.Daily;
        this.objects = [] as AbilityObject[];
        this.modifiers = [] as Modifier[];
        this.type = Ability.Type.Utility;
    }

    public getDescription(longDescription?: boolean): string {
      const stats: [string, string][] = [
        ['Chance', Math.ceil(this.chance * 100) + '%'],
        ['Cooldown', Ability.Cooldown[this.cooldown]]
      ];

      return this.renderCard(
        'utility',
        this.generateName(),
        stats,
        this.description ? this.description : '',
        longDescription
      );
    }

    protected override getObjects(): AbilityObject[] {
      return this.objects;
    }

    protected override getDescriptiveNumbers(): [string, DescriptiveNumber][] {
      return [
        ['Value', this.value],
        ['Duration', this.duration]
      ];
    }

    public generateName(): string {
      const parts: string[] = [];

      this.modifiers.forEach(mod => {
        if(mod.namePrefix) {
          parts.push(mod.namePrefix);
        }
      });

      this.objects.forEach(obj => {
        const part = obj.prefix === undefined ? obj.name : obj.prefix;
        if(part) {
          parts.push(part);
        }
      });

      parts.push(this.name);

      return parts.join(' ');
    }

    public compensate(): void {
      if(Vendor.altersAbilities()) {
        const extraMods: Modifier[] = Utils.getNumberFromValueMap(Utility.MODIFIER_CHANCE, new ModifierFactory(this)) as Modifier[];
        extraMods.forEach(mod => {
          this.modifiers.push(mod);
        })
      }

      this.chance = this.chance * ModifierFactory.getDPSMultiplier(this.modifiers, this)
      this.objects.forEach((obj: AbilityObject) => {
        this.chance /= obj.rarity;
      })
      
      const bonus = ModifierFactory.getDPSBonus(this.modifiers, this);
      if(bonus < 0) {
        this.chance *= Utils.getDPS(CharacterContext.level) / (Utils.getDPS(CharacterContext.level) - bonus)
      } else if(bonus != 0) {
        if(this.value) {
          this.value.addBonus(bonus * this.value.getValue() / Utils.getDPS(CharacterContext.level))
        } else {
          this.chance += bonus / Utils.getDPS(CharacterContext.level);
        }
      }

      const repeat: repeatableModifier = new repeatableModifier();
      if(this.chance > 1) { 
        if(this.cooldown === Ability.Cooldown.Encounter) {
          if(!this.value) {
            throw 'encounter cooldown ability with no value to compensate '+JSON.stringify(this);
          }

          const newChanceNumeric: number = 0.9;
          this.value.addBonus(Math.ceil(this.value.getValue() * (this.chance - newChanceNumeric) / newChanceNumeric));
          this.value.compensate();
          this.chance = newChanceNumeric;

        } else {
          let tempRepeat = Math.ceil(this.chance);
          this.chance/=tempRepeat;

          repeat.setValue(tempRepeat);
          this.modifiers.push(repeat);
        }        
      }
    }
}