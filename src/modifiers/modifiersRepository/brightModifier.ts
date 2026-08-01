import { Ability } from "../../core/ability.js";
import { AffectsWeight } from "../../core/affectsWeight.js";
import { Utils } from "../../core/utils.js";
import { Modifier } from "../modifier.js";

export class brightModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 1.5};
        this.weight = (x?: AffectsWeight) => {return x?.cooldown === Ability.Cooldown.Encounter ? Utils.COMMON_MODIFIER : 0} 
        this.name = 'Bright'
        this.namePrefix = 'Bright';
        this.description = 'Can only be used in bright light. ';
        this.modifierType = Modifier.Type.Constraint;
    }
}
