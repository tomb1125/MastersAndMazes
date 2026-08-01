import { DescriptiveNumberFactory } from "../../components/descriptiveNumberFactory.js";
import { Ability } from "../../core/ability.js";
import { AffectsWeight } from "../../core/affectsWeight.js";
import { CanAffectModifier } from "../../core/canAffectModifier.js";
import { Utils } from "../../core/utils.js";
import { Modifier } from "../modifier.js";

export class managainModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.modifierType =Modifier.Type.Improvement;
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? Utils.COMMON_MODIFIER : 0}
        this.name = 'Mana Gain'; 
        this.namePrefix = 'Mana Leeching'; 
        this.description = 'When you hit, gain mana equal to damage dealt.';
        this.powerMultiplier = (x: CanAffectModifier) => {return 0.75};
    }
}
