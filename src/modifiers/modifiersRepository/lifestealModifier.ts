import { DescriptiveNumberFactory } from "../../components/descriptiveNumberFactory.js";
import { Ability } from "../../core/ability.js";
import { AffectsWeight } from "../../core/affectsWeight.js";
import { CanAffectModifier } from "../../core/canAffectModifier.js";
import { Utils } from "../../core/utils.js";
import { Modifier } from "../modifier.js";

export class lifestealModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.modifierType =Modifier.Type.Improvement;
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? Utils.COMMON_MODIFIER : 0}
        this.name = 'Lifesteal'; 
        this.namePrefix = 'Leeching'; 
        this.description = 'When you hit, heal yourself equal to damage dealt.';
        this.powerMultiplier = (x: CanAffectModifier) => {return 0.55}; //TODO this should be bonus equal to damage... however damage is set after modifiers...s
    }
}
