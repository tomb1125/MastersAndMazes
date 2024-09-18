import { Effect } from "./effect"
import { Ability } from "../core/ability"
import { CanAffectModifier } from "../core/canAffectModifier"
import { HasWeigth } from "../core/hasWeigth";
import { DescriptiveNumber } from "../components/descriptiveNumber";
import { AffectsWeight } from "../core/affectsWeight";

export class Modifier implements HasWeigth {
    name: string;
    powerBonus: (x: CanAffectModifier) => number = (x: CanAffectModifier) => {return 0};
    powerMultiplier: (x: CanAffectModifier) => number = (x: CanAffectModifier) => {return 1};
    modifierType: Modifier.Type;
    weight: (x?: AffectsWeight) => number = (x?: AffectsWeight) => {return 1};
    chance: number = 1;
    numericComponents: DescriptiveNumber[];

    namePrefix: string;
    description: string;
    longDescription: string;
    effect: Effect;

    constructor(otherName?: string) {
      if (otherName !== undefined) {
        this.name = otherName;
      }
    }
    
  }

  
export namespace Modifier
{
    export enum Type
    {
      Constraint,
      Improvement,
      Effect,
      Other
    }
}