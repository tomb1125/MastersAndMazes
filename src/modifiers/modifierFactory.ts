import { WeightedList } from "../core/weightedList";
import { Modifier } from "./modifier"

import { nightlyModifier } from "./modifiersRepository/nightlyModifier";
import { laylineModifier } from "./modifiersRepository/laylineModifier";
import { bloodiedModifier } from "./modifiersRepository/bloodiedModifier";
import { ultimateModifier } from "./modifiersRepository/ultimateModifier";
import { signatureModifier } from "./modifiersRepository/signatureModifier";
import { vengefulModifier } from "./modifiersRepository/vengefulModifier";
import { momentumModifier } from "./modifiersRepository/momentumModifier";
import { exhaustingModifer } from "./modifiersRepository/exhaustingModifer";
import { multipleModifier } from "./modifiersRepository/multipleModifer";
import { cleaveModifier } from "./modifiersRepository/cleaveModifier";
import { fastModifier } from "./modifiersRepository/fastModifier";
import { selfHealModifier } from "./modifiersRepository/selfHealModifier";
import { applyEffectModifier } from "./modifiersRepository/applyEffectModifier";
import { gainEffectModifier } from "./modifiersRepository/gainEffectModifier";
import { lifestealModifier } from "./modifiersRepository/lifestealModifier";


export class ModifierFactory {

    public static getAll(): WeightedList {
        const mods: WeightedList = new WeightedList();

        mods.push(new nightlyModifier());
        mods.push(new bloodiedModifier());
        mods.push(new ultimateModifier());
        mods.push(new signatureModifier());
        mods.push(new laylineModifier());
        mods.push(new vengefulModifier());
        mods.push(new momentumModifier());
        mods.push(new exhaustingModifer());
        mods.push(new multipleModifier());
        mods.push(new cleaveModifier());
        mods.push(new fastModifier());
        mods.push(new selfHealModifier());
        mods.push(new applyEffectModifier());
        mods.push(new gainEffectModifier());
        mods.push(new lifestealModifier());

        return mods;
    }

    public static get(count: number) {
        return ModifierFactory.getAll().get(count) as Modifier[];
    }
    
}