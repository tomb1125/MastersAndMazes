export class Modifier {
    readonly name: string;
    powerBonus: number;
    powerMultiplier: number;
    type: Modifier.Type
    weight: number = 1;

    namePrefix: string;
    description: string;
    longDescription: string;

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