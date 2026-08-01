import { Ability } from "../../core/ability.js";
import { AffectsWeight } from "../../core/affectsWeight.js";
import { CanAffectModifier } from "../../core/canAffectModifier.js";
import { Utils } from "../../core/utils.js";
import { Effect } from "../effect.js";
import { EffectFactory } from "../effectFactory.js";
import { Modifier } from "../modifier.js";

export class gainEffectModifier extends Modifier {
    
    constructor(aff: AffectsWeight, effect?: Effect) {
        super();
        let buffFactory: EffectFactory = new EffectFactory(aff).filter((eff: Effect) => eff.subtype === Effect.Subtype.Buff);
        this.modifierType = Modifier.Type.Improvement;
        this.weight = (x?: AffectsWeight) => {return x?.cooldown === Ability.Cooldown.Encounter ? buffFactory.items.items.length * Utils.EFFECT_WEIGHT_MOD * Utils.COMMON_MODIFIER : 0}

        if(effect) {
            this.effect = effect;
        } else {
            this.effect = buffFactory.get(1)[0] as Effect;
        }
        
        this.description = 'When you succeed roll, also gain an effect: '+this.effect.description;
        this.namePrefix = this.effect.namePrefix;
        this.name = 'Gain '+this.effect.name;
        this.powerBonus = (x: CanAffectModifier) => {return x.chance != null ?  x.chance * this.effect.powerBonus(x) : -100000 };
        this.powerMultiplier = (x: CanAffectModifier) => {return this.effect.powerMultiplier(x) };
       }
}
