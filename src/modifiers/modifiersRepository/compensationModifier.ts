import { AffectsWeight } from "../../core/affectsWeight";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Utils } from "../../core/utils";
import { Modifier } from "../modifier";

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
            this.powerBonus = (x: CanAffectModifier) => {return x.chance != null && x.range != null ?  x.chance / Utils.getRangeCoeficient(x.range) * bonus : -1000000 };
        }
    }
}