import { CharacterContext } from "../../core/characterContext";
import { ClassDetails } from "../classDetails";

export class RogueClass extends ClassDetails {
    constructor() {
        super();
        this.type = CharacterContext.Class.Rogue;
        this.primaryAttribute = CharacterContext.Attribute.Dexterity;
        this.secondaryAttribute = CharacterContext.Attribute.Intelligence;
        this.armorProficiency = CharacterContext.ArmorProficiency.Medium;
    }
    
}
