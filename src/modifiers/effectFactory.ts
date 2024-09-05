import { WeightedList } from "../core/weightedList";
import { Modifier } from "./modifier"
import { Factory } from "../core/factory";
import { AffectsWeight } from "../core/affectsWeight";
//factory imports
import { vulnerableEffect } from "./effectRepository/vulnerableEffect";
import { stunEffect } from "./effectRepository/stunEffect";
import { scalingDotEffect } from "./effectRepository/scalingDotEffect";
import { protectedEffect } from "./effectRepository/protectedEffect";
import { invisibilityEffect } from "./effectRepository/multiclassEffects/invisibilityEffect";
import { instakillEffect } from "./effectRepository/instakillEffect";
import { guidingEffect } from "./effectRepository/guidingEffect";
import { exposeEffect } from "./effectRepository/exposeEffect";
import { damageBonusEffect } from "./effectRepository/damageBonusEffect";
export class EffectFactory extends Factory {

    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new vulnerableEffect());
            this.items.push(new stunEffect());
            this.items.push(new scalingDotEffect());
            this.items.push(new protectedEffect());
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