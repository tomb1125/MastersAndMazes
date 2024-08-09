import { CharacterContext } from "../core/characterContext";

export class ClassDetails {
    type: CharacterContext.Class;
    primaryAttribute: CharacterContext.Class;
    secondaryAttribute: CharacterContext.Class;
    //armorProficiency
    innateAbilities: string[];
  }