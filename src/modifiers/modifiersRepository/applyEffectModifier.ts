import { Ability } from "../../core/ability.js";
import { AffectsWeight } from "../../core/affectsWeight.js";
import { CanAffectModifier } from "../../core/canAffectModifier.js";
import { Utils } from "../../core/utils.js";
import { Effect } from "../effect.js";
import { EffectFactory } from "../effectFactory.js";
import { Modifier } from "../modifier.js";

export class applyEffectModifier extends Modifier {
    
    constructor(aff: AffectsWeight) {
        let debuffFactory: EffectFactory = new EffectFactory(aff).filter((eff: Effect) => eff.subtype === Effect.Subtype.Debuff);

        super();
        this.modifierType =Modifier.Type.Improvement;
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? debuffFactory.items.items.length * Utils.EFFECT_WEIGHT_MOD * Utils.COMMON_MODIFIER  : 0}
        this.effect = debuffFactory.get(1)[0] as Effect;
        this.description = 'When you hit, apply effect: '+this.effect.description;
        this.namePrefix = this.effect.namePrefix;
        this.name = 'Apply '+this.effect.name;
        this.powerBonus = (x: CanAffectModifier) => {return x.chance != null && x.range != null ?  x.chance / Utils.getRangeCoeficient(x.range) * this.effect.powerBonus(x) : -1000000 };
        this.powerMultiplier = (x: CanAffectModifier) => {return this.effect.powerMultiplier(x) }; //TODO test if true
    }
}
