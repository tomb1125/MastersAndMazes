import { Ability } from "../core/ability.js";
import { CharacterContext } from "../core/characterContext.js";
import { ClericClass } from "./classes/cleric.js";
import { RogueClass } from "./classes/rogue.js";

export class ClassDetails {
    type: CharacterContext.Class;
    primaryAttribute: CharacterContext.Attribute;
    secondaryAttribute: CharacterContext.Attribute;
    armorProficiency: CharacterContext.ArmorProficiency;
    elements: Ability.Element[];
    innateAbilities: string[];


    constructor() {

    }
  }