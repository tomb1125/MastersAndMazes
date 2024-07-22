import { WeightedList } from "../core/weightedList";
import { Modifier } from "./modifier"
import { dotEffect } from "./effectRepository/dotEffect";
import { stunEffect } from "./effectRepository/stunEffect";
import { instakillEffect } from "./effectRepository/instakillEffect";
import { guidingEffect } from "./effectRepository/guidingEffect";
import { damageBonusEffect } from "./effectRepository/damageBonusEffect";


export class EffectFactory { //TODO Extend factory to better use filter

    public static getAll(): WeightedList {
 
        const eff : WeightedList = new WeightedList();

        eff.push(new stunEffect());
        eff.push(new instakillEffect());
        eff.push(new dotEffect());
        eff.push(new guidingEffect());
        eff.push(new damageBonusEffect());

        return eff;
    }

    public static get(count: number) {
        return EffectFactory.getAll().get(count) as Modifier[];
    }
    
}