import { Effect } from "./effect"
import { PowerModifier } from "../core/powerModifier"
import { HasWeigth } from "../core/hasWeigth";

export class Modifier implements HasWeigth {
    readonly name: string;
    powerBonus: (x: PowerModifier) => number = (x: PowerModifier) => {return 0};
    powerMultiplier: (x: PowerModifier) => number = (x: PowerModifier) => {return 1};
    type: Modifier.Type
    weight: number = 1;
    chance: number = 1;

    namePrefix: string;
    description: string;
    longDescription: string;
    effect: Effect;

    constructor(otherName?: string) {
      this.weight = 1; 
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