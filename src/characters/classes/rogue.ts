import { Ability } from "../../core/ability.js";
import { CharacterContext } from "../../core/characterContext.js";
import { ClassDetails } from "../classDetails.js";

export class RogueClass extends ClassDetails {
    constructor() {
        super();
        this.type = CharacterContext.Class.Rogue;
        this.primaryAttribute = CharacterContext.Attribute.Dexterity;
        this.secondaryAttribute = CharacterContext.Attribute.Intelligence;
        this.armorProficiency = CharacterContext.ArmorProficiency.Medium;
        this.elements = [Ability.Element.Dark, Ability.Element.Finesse, Ability.Element.Poison]
    }
    
}
