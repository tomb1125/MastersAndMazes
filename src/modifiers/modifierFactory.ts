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
import { AffectsWeight } from "../core/affectsWeight";
import { scalingDotEffect } from "./effectRepository/scalingDotEffect";
import { repeatableModifier } from "./modifiersRepository/repeatableModifier";


export class ModifierFactory {
    modifiers: WeightedList;

    constructor(list?: WeightedList) {
        if(list === undefined) {
            this.modifiers = new WeightedList();
            
            this.modifiers.push(new applyEffectModifier());
            this.modifiers.push(new bloodiedModifier());
            this.modifiers.push(new cleaveModifier());
            this.modifiers.push(new exhaustingModifer());
            this.modifiers.push(new fastModifier());
            this.modifiers.push(new gainEffectModifier());
            this.modifiers.push(new laylineModifier());
            this.modifiers.push(new lifestealModifier());
            this.modifiers.push(new momentumModifier());
            this.modifiers.push(new multipleModifier()); 
            this.modifiers.push(new nightlyModifier());
            this.modifiers.push(new selfHealModifier());
            this.modifiers.push(new signatureModifier());
            this.modifiers.push(new vengefulModifier());
            this.modifiers.push(new ultimateModifier());
            //this.modifiers.push(new repeatableModifier()); //this modifier is excluded for now purposfully. It behaves differently for utilities and for attacks.
            this.modifiers.push(new scalingDotEffect());
        } else {
            this.modifiers = list;
        }
    }

    public getAll(): WeightedList {
        return this.modifiers;
    }

    public get(count: number, affector: AffectsWeight) {
        return this.modifiers.get(count, affector) as Modifier[];
    }

    public filter(z: (x: any) => boolean): ModifierFactory {
        this.modifiers = this.modifiers.filter(z)
        return this;
    }
    
}