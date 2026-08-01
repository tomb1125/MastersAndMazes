import { AbilityObject } from "../../../components/abilityObject.js";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory.js";
import { DescriptiveNumber } from "../../../components/descriptiveNumber.js";
import { ModifierFactory } from "../../../modifiers/modifierFactory.js";
import { Ability } from "../../ability.js";
import { CharacterContext } from "../../characterContext.js";
import { Utility } from "../../utility.js";


export class restorationUtility extends Utility {

    constructor() {
        super('Restoration');
        this.cooldown = Ability.Cooldown.Adventure;
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.chance = 0.6;
        
        this.description = 'After an hour of ritual, you can cause one wound effect like limb loss, blindness or statistics loss to be removed from one character. Additionally the target loses 1 Scar. You can use this ability in a moderate size city to alternatively gain 150G on success. ';
        this.compensate();
    }
}