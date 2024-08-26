import { CharacterContext } from "../core/characterContext";
import { ClericClass } from "./classes/cleric";
import { RogueClass } from "./classes/rogue";

export class ClassDetails {
    type: CharacterContext.Class;
    primaryAttribute: CharacterContext.Attribute;
    secondaryAttribute: CharacterContext.Attribute;
    armorProficiency: CharacterContext.ArmorProficiency
    innateAbilities: string[];


    constructor() {

    }
  }