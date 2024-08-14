import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Effect } from "../effect";
import { EffectFactory } from "../effectFactory";
import { Modifier } from "../modifier";

export class gainEffectModifier extends Modifier {
    
    constructor(aff: AffectsWeight) {
        super();
        this.modifierType =Modifier.Type.Improvement;
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? 4 : 0}
        this.effect = new EffectFactory(aff).filter((eff: Effect) => eff.subtype === Effect.Subtype.Buff).get(1)[0] as Effect;
        this.description = 'When you hit, gain an effect: '+this.effect.description;
        this.namePrefix = this.effect.namePrefix;
        this.name = 'Gain '+this.effect.name;
        this.powerBonus = (x: CanAffectModifier) => {return x.chance != null ?  x.chance * this.effect.powerBonus(x) : -100000 };
        this.powerMultiplier = (x: CanAffectModifier) => {return this.effect.powerMultiplier(x) }; //TODO test if true
       }
}
