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
import { Factory } from "../core/factory";


export class ModifierFactory extends Factory {

    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            
            this.items.push(new applyEffectModifier(affector));
            this.items.push(new bloodiedModifier());
            this.items.push(new cleaveModifier());
            this.items.push(new exhaustingModifer());
            this.items.push(new fastModifier());
            this.items.push(new gainEffectModifier(affector));
            this.items.push(new laylineModifier());
            this.items.push(new lifestealModifier());
            this.items.push(new momentumModifier(affector));
            this.items.push(new multipleModifier()); 
            this.items.push(new nightlyModifier());
            this.items.push(new selfHealModifier(affector));
            this.items.push(new signatureModifier());
            this.items.push(new vengefulModifier());
            this.items.push(new ultimateModifier());
            //this.items.push(new repeatableModifier()); //this modifier is excluded for now purposfully. It behaves differently for utilities and for attacks.
            this.items.push(new scalingDotEffect());
        } else {
            this.items = list;
        }
    }

    public get(count: number) {
        return super.get(count) as Modifier[];
    }

    public filter(z: (x: any) => boolean): ModifierFactory {
        return super.filter(z) as ModifierFactory;
    }
    
}