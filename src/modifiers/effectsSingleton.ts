import { Effect } from "./effect";
import { damageBonusEffect } from "./effectRepository/damageBonusEffect";
import { exposeEffect } from "./effectRepository/exposeEffect";
import { guidingEffect } from "./effectRepository/guidingEffect";
import { instakillEffect } from "./effectRepository/instakillEffect";
import { scalingDotEffect } from "./effectRepository/scalingDotEffect";
import { stunEffect } from "./effectRepository/stunEffect";
import { vulnerableEffect } from "./effectRepository/vulnerableEffect";

export class EffectsSingleton {
    public static effects: any = {
        damageBonusEffect,
        exposeEffect,
        guidingEffect,
        instakillEffect,
        scalingDotEffect,
        stunEffect,
        vulnerableEffect
    }
}