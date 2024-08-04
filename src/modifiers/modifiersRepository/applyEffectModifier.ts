import { PowerModifier } from "../../core/powerModifier";
import { Utils } from "../../core/utils";
import { Effect } from "../effect";
import { EffectFactory } from "../effectFactory";
import { Modifier } from "../modifier";

export class applyEffectModifier extends Modifier {
    
    constructor() {
        super();
        this.longDescription = '';
        this.modifierType =Modifier.Type.Improvement;
        this.weight = () => {return 4};
        this.effect = EffectFactory.getAll().filter((eff: Effect) => eff.subtype === Effect.Subtype.Debuff).get(1)[0] as Effect;
        this.description = 'When you hit, apply effect: '+this.effect.description;
        this.namePrefix = this.effect.namePrefix;
        this.name = 'Apply '+this.effect.name;
        this.powerBonus = (x: PowerModifier) => {return x.chance != null && x.range != null ?  x.chance / Utils.getRangeCoeficient(x.range) * this.effect.powerBonus(x) : -1000000 };
        this.powerMultiplier = (x: PowerModifier) => {return this.effect.powerMultiplier(x) }; //TODO test if true
    }
}
