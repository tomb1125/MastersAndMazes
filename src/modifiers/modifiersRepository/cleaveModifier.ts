import { Ability } from "../../core/ability.js";
import { AffectsWeight } from "../../core/affectsWeight.js";
import { Utils } from "../../core/utils.js";
import { Modifier } from "../modifier.js";

export class cleaveModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 0.5};
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? Utils.COMMON_MODIFIER : 0}
        this.name = 'Cleave'
        this.namePrefix = 'Cleaving'; //TODO cleave could scale
        this.description = 'After this action, repeat this action 1 time, without paying mana cost. With this repeated action you must target creature adjacent to you or last target.';
        this.modifierType =Modifier.Type.Improvement;

    }
}
