import { Effect } from "./effect"
import { PowerModifier } from "../core/powerModifier"
import { HasWeigth } from "../core/hasWeigth";
import { DescriptiveNumber } from "../components/descriptiveNumber";

export class Modifier implements HasWeigth {
    name: string;
    powerBonus: (x: PowerModifier) => number = (x: PowerModifier) => {return 0};
    powerMultiplier: (x: PowerModifier) => number = (x: PowerModifier) => {return 1};
    type: Modifier.Type;
    elements: Modifier.Element[];
    weight: number = 1;
    chance: number = 1;
    numericComponents: DescriptiveNumber[];

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

    export enum Element
    {
      Fire, 
      Ice,
      Physical,
      Arcane, 
      Holy, 
      Shadow, 
      Psychic, 
      Nature,
      Lightning,
      Curse
    }
}