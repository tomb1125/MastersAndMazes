import { AffectsWeight } from "../../core/affectsWeight";
import { PowerModifier } from "../../core/powerModifier";
import { Effect } from "../effect";
import { EffectFactory } from "../effectFactory";
import { Modifier } from "../modifier";

export class gainEffectModifier extends Modifier {
    
    constructor(aff: AffectsWeight) {
        super();
        this.modifierType =Modifier.Type.Improvement;
        this.weight =() => {return 4};
        this.effect = new EffectFactory(aff).filter((eff: Effect) => eff.subtype === Effect.Subtype.Buff).get(1)[0] as Effect;
        this.description = 'When you hit, gain an effect: '+this.effect.description;
        this.namePrefix = this.effect.namePrefix;
        this.name = 'Gain '+this.effect.name;
        this.powerBonus = (x: PowerModifier) => {return x.chance != null ?  x.chance * this.effect.powerBonus(x) : -100000 };
        this.powerMultiplier = (x: PowerModifier) => {return this.effect.powerMultiplier(x) }; //TODO test if true
       }
}
