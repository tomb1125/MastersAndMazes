import { Ability } from "../../core/ability.js";
import { AffectsWeight } from "../../core/affectsWeight.js";
import { Utils } from "../../core/utils.js";
import { Modifier } from "../modifier.js";

export class opportunistModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 1.4};
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? Utils.COMMON_MODIFIER : 0} 
        this.name = 'Opportunist'
        this.namePrefix = 'Opportunists';
        this.description = 'Can only be used against enemies that rolled 90-00 on D100 during their last turn. ';
        this.modifierType =Modifier.Type.Constraint;
    }
}
