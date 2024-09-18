import { Ability } from "../../core/ability";
import { CharacterContext } from "../../core/characterContext";
import { ClassDetails } from "../classDetails";

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
