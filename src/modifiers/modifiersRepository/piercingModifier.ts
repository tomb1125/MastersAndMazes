import { Ability } from "../../core/ability.js";
import { AffectsWeight } from "../../core/affectsWeight.js";
import { CanAffectModifier } from "../../core/canAffectModifier.js";
import { Utils } from "../../core/utils.js";
import { Modifier } from "../modifier.js";

export class piercingModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 0.8};
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? Utils.COMMON_MODIFIER : 0}
        this.name = 'Piercing';
        this.namePrefix = 'Piercing';
        this.description = 'When you hit deal damage to Health directly, additionally reduce enemy Armor by the same value. ';
        this.modifierType = Modifier.Type.Improvement;
    }
}
