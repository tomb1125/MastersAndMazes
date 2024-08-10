import { CharacterContext } from "../core/characterContext";

export class ClassDetails {
    type: CharacterContext.Class;
    primaryAttribute: CharacterContext.Attribute;
    secondaryAttribute: CharacterContext.Attribute;
    //armorProficiency
    innateAbilities: string[];
  }