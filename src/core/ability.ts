import { abilityType } from "./abilityType";

export class Ability {
    readonly name: string;
    chance: number;
    manaCost: number;
    type: abilityType;
   
    constructor(otherName?: string) {
      if (otherName !== undefined) {
        this.name = otherName;
      }
    }

    generate() {

    }
  }