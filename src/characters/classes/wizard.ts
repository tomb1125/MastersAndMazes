import { Ability } from "../../core/ability";
import { CharacterContext } from "../../core/characterContext";
import { ClassDetails } from "../classDetails";

export class WizardClass extends ClassDetails {
    constructor() {
        super();
        this.type = CharacterContext.Class.Rogue;
        this.primaryAttribute = CharacterContext.Attribute.Intelligence;
        this.secondaryAttribute = CharacterContext.Attribute.Wisdom;
        this.armorProficiency = CharacterContext.ArmorProficiency.Light;
        this.elements = [Ability.Element.Ice, Ability.Element.Fire, Ability.Element.Lightning]
    }
    
}
