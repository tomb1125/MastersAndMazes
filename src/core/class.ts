import { CharacterContext } from "./characterContext";

export class ClassDetails {
    type: CharacterContext.Class;
    primaryAttribute: CharacterContext.Class;
    secondaryAttribute: CharacterContext.Class;
    //armorProficiency
    abilityReplacementDescription: string;
    expAbilityDescription: string;
    escapeAbilityDescription: string;
    passiveAbilityDescription: string;
  }