import { Ability } from "../../core/ability.js";
import { AffectsWeight } from "../../core/affectsWeight.js";
import { CanAffectModifier } from "../../core/canAffectModifier.js";
import { Utils } from "../../core/utils.js";
import { Modifier } from "../modifier.js";

export class fastModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerBonus = () => {return - Utils.DPS};
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? Utils.COMMON_MODIFIER : 0}
        this.name = 'Fast'
        this.namePrefix = 'Fast';
        this.description = 'You can use Swift Action to use this ability.';
        this.modifierType =Modifier.Type.Improvement;
    }
}
