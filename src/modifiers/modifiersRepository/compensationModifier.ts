import { AffectsWeight } from "../../core/affectsWeight.js";
import { CanAffectModifier } from "../../core/canAffectModifier.js";
import { Modifier } from "../modifier.js";

export class compensationModifier extends Modifier {
    name = 'Radiant Flame';
    namePrefix = '';
    description = '';
    weight = () => {return 0} //this is purposfully excluded by design

    constructor(affector: AffectsWeight, name?: any, mult?: number, bonus?: number) {
        super();
        this.name = name ? name : '';
        if(mult) {
            this.powerMultiplier = () => mult;
        }
        if(bonus) {
            this.powerBonus = (x: CanAffectModifier) => {return x.chance != null && x.range != null ?  x.chance * bonus : -1000000 };
        }
    }
}