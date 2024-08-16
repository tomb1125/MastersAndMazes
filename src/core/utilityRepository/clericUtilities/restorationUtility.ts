import { AbilityObject } from "../../../components/abilityObject";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory";
import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { ModifierFactory } from "../../../modifiers/modifierFactory";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class restorationUtility extends Utility {

    constructor() {
        super('Restoration');
        this.cooldown = Ability.Cooldown.Adventure;
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? 1 : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.chance = 0.6;
        
        this.description = 'After an hour of ritual, you can cause wound effects like limb loss, blindness or statistics loss to be removed from one character. Additionally the target loses 1 Scar. You can use this ability in a moderate size city to alternatively gain 150G on success. ';
        this.compensate();
    }
}