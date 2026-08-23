import { Effect } from "./effect.js"
import { Ability } from "../core/ability.js"
import { CanAffectModifier } from "../core/canAffectModifier.js"
import { HasWeigth } from "../core/hasWeigth.js";
import { DescriptiveNumber } from "../components/descriptiveNumber.js";
import { AffectsWeight } from "../core/affectsWeight.js";

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
    typeName: string = this.constructor.name;

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