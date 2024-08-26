import { CharacterContext } from "../../core/characterContext";
import { ClassDetails } from "../classDetails";

export class ClericClass extends ClassDetails {
    constructor() {
        super();
        this.type = CharacterContext.Class.Cleric;
        this.primaryAttribute = CharacterContext.Attribute.Wisdom;
        this.secondaryAttribute = CharacterContext.Attribute.Charisma;
        this.armorProficiency = CharacterContext.ArmorProficiency.Heavy;
    }
}
