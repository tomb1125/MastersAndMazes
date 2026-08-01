import { WeightedList } from "../core/weightedList.js";
import { Modifier } from "./modifier.js"
import { Factory } from "../core/factory.js";
import { AffectsWeight } from "../core/affectsWeight.js";
//factory imports
import { vulnerableEffect } from "./effectRepository/vulnerableEffect.js";
import { stunEffect } from "./effectRepository/stunEffect.js";
import { scalingDotEffect } from "./effectRepository/scalingDotEffect.js";
import { protectedEffect } from "./effectRepository/protectedEffect.js";
import { retributionEffect } from "./effectRepository/multiclassEffects/retributionEffect.js";
import { invisibilityEffect } from "./effectRepository/multiclassEffects/invisibilityEffect.js";
import { instakillEffect } from "./effectRepository/instakillEffect.js";
import { guidingEffect } from "./effectRepository/guidingEffect.js";
import { exposeEffect } from "./effectRepository/exposeEffect.js";
import { damageBonusEffect } from "./effectRepository/damageBonusEffect.js";
export class EffectFactory extends Factory {

    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new vulnerableEffect());
            this.items.push(new stunEffect());
            this.items.push(new scalingDotEffect());
            this.items.push(new protectedEffect());
            this.items.push(new retributionEffect());
            this.items.push(new invisibilityEffect());
            this.items.push(new instakillEffect());
            this.items.push(new guidingEffect());
            this.items.push(new exposeEffect());
            this.items.push(new damageBonusEffect());
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