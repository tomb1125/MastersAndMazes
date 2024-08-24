import { WeightedList } from "../core/weightedList";
import { Modifier } from "./modifier"
import { stunEffect } from "./effectRepository/stunEffect";
import { instakillEffect } from "./effectRepository/instakillEffect";
import { guidingEffect } from "./effectRepository/guidingEffect";
import { damageBonusEffect } from "./effectRepository/damageBonusEffect";
import { Factory } from "../core/factory";
import { AffectsWeight } from "../core/affectsWeight";
import { scalingDotEffect } from "./effectRepository/scalingDotEffect";
import { exposeEffect } from "./effectRepository/exposeEffect";
import { vulnerableEffect } from "./effectRepository/vulnerableEffect";

export class EffectFactory extends Factory {

    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            
            this.items.push(new damageBonusEffect());
            this.items.push(new exposeEffect());
            this.items.push(new guidingEffect());
            this.items.push(new instakillEffect());
            this.items.push(new scalingDotEffect());
            this.items.push(new stunEffect());
            this.items.push(new vulnerableEffect());

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