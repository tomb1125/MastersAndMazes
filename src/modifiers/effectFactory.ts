import { WeightedList } from "../core/weightedList.js";
import { Modifier } from "./modifier.js"
import { Factory } from "../core/factory.js";
import { AffectsWeight } from "../core/affectsWeight.js";
//factory imports
import { stunEffect } from "./effectRepository/stunEffect.js";
export class EffectFactory extends Factory {

    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new stunEffect());
        } else {
            this.items = list;
        }
    }

    public get(count: number) {
        return super.get(count) as Modifier[];
    }

    public filter(z: (x: any) => boolean): EffectFactory {
        return super.filter(z) as EffectFactory;
    }
    
}