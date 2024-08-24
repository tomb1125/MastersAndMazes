import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Utils } from "../../core/utils";
import { Effect } from "../effect";
import { EffectFactory } from "../effectFactory";
import { Modifier } from "../modifier";

export class applyEffectModifier extends Modifier {
    
    constructor(aff: AffectsWeight) {
        let debuffFactory: EffectFactory = new EffectFactory(aff).filter((eff: Effect) => eff.subtype === Effect.Subtype.Debuff);

        super();
        this.longDescription = '';
        this.modifierType =Modifier.Type.Improvement;
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? debuffFactory.items.items.length * Utils.EFFECT_WEIGHT_MOD  : 0}
        this.effect = debuffFactory.get(1)[0] as Effect;
        this.description = 'When you hit, apply effect: '+this.effect.description;
        this.namePrefix = this.effect.namePrefix;
        this.name = 'Apply '+this.effect.name;
        this.powerBonus = (x: CanAffectModifier) => {return x.chance != null && x.range != null ?  x.chance / Utils.getRangeCoeficient(x.range) * this.effect.powerBonus(x) : -1000000 };
        this.powerMultiplier = (x: CanAffectModifier) => {return this.effect.powerMultiplier(x) }; //TODO test if true
    }
}
