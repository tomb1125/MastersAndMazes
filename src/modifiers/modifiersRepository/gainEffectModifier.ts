import { PowerModifier } from "../../core/powerModifier";
import { Utils } from "../../core/utils";
import { Effect } from "../effect";
import { EffectFactory } from "../effectFactory";
import { Modifier } from "../modifier";

export class gainEffectModifier extends Modifier {
    
    constructor() {
        super();
        this.type = Modifier.Type.Improvement;
        this.weight = 4;
        this.effect = EffectFactory.getAll().filter((eff: Effect) => eff.subtype === Effect.Subtype.Buff).get(1)[0] as Effect;
        this.description = 'When you hit, gain effect: '+this.effect.description;
        this.namePrefix = this.effect.namePrefix;
        this.name = 'Gain '+this.effect.name;
        this.powerBonus = (x: PowerModifier) => {return x.chance != null ?  x.chance * this.effect.powerBonus(x) : -100000 };
        this.powerMultiplier = (x: PowerModifier) => {return this.effect.powerMultiplier(x) }; //TODO test if true
       }
}
