import { Ability } from "../../core/ability.js";
import { AffectsWeight } from "../../core/affectsWeight.js";
import { CanAffectModifier } from "../../core/canAffectModifier.js";
import { Utils } from "../../core/utils.js";
import { Modifier } from "../modifier.js";

export class laylineModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = (x: CanAffectModifier) => {return x.range ? Math.max(1.2, 2.1 - x.range/20) : 1}; 1.7; 
        this.weight = (x?: AffectsWeight) => {return x?.cooldown === Ability.Cooldown.Encounter ? Utils.COMMON_MODIFIER : 0}
        this.name = 'Layline';
        this.namePrefix = 'Layline';
        this.description = 'Can be used only while adjacent to place of power (usually you can detect 2-4 places of power each encounter).';
        this.modifierType =Modifier.Type.Constraint;
    }
}
