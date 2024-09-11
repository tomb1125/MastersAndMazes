import { CharacterContext } from "../../core/characterContext";
import { ClassDetails } from "../classDetails";

export class FighterClass extends ClassDetails {
    constructor() {
        super();
        this.type = CharacterContext.Class.Rogue;
        this.primaryAttribute = CharacterContext.Attribute.Strength;
        this.secondaryAttribute = CharacterContext.Attribute.Constitution;
        this.armorProficiency = CharacterContext.ArmorProficiency.Heavy;
    }
    
}
