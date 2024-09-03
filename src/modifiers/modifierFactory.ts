import { WeightedList } from "../core/weightedList";
import { Modifier } from "./modifier"
import { AffectsWeight } from "../core/affectsWeight";
import { Factory } from "../core/factory";
//factory imports
import { vengefulModifier } from "./modifiersRepository/vengefulModifier";
import { ultimateModifier } from "./modifiersRepository/ultimateModifier";
import { signatureModifier } from "./modifiersRepository/signatureModifier";
import { selfHealModifier } from "./modifiersRepository/selfHealModifier";
import { restedModifer } from "./modifiersRepository/restedModifer";
import { repeatableModifier } from "./modifiersRepository/repeatableModifier";
import { opportunistModifier } from "./modifiersRepository/opportunistModifier";
import { nightlyModifier } from "./modifiersRepository/nightlyModifier";
import { multipleModifier } from "./modifiersRepository/multipleModifier";
import { undeadBaneModifier } from "./modifiersRepository/multiclassModifiers/undeadBaneModifier";
import { momentumModifier } from "./modifiersRepository/momentumModifier";
import { lifestealModifier } from "./modifiersRepository/lifestealModifier";
import { laylineModifier } from "./modifiersRepository/laylineModifier";
import { grazedModifier } from "./modifiersRepository/grazedModifier";
import { gainEffectModifier } from "./modifiersRepository/gainEffectModifier";
import { fastModifier } from "./modifiersRepository/fastModifier";
import { exhaustingModifer } from "./modifiersRepository/exhaustingModifer";
import { templeModifier } from "./modifiersRepository/clericModifiers/templeModifier";
import { pristineModifier } from "./modifiersRepository/clericModifiers/pristineModifier";
import { preachingModifier } from "./modifiersRepository/clericModifiers/preachingModifier";
import { pacifistModifier } from "./modifiersRepository/clericModifiers/pacifistModifier";
import { candleModifier } from "./modifiersRepository/clericModifiers/candleModifier";
import { cleaveModifier } from "./modifiersRepository/cleaveModifier";
import { bloodiedModifier } from "./modifiersRepository/bloodiedModifier";
import { applyEffectModifier } from "./modifiersRepository/applyEffectModifier";
export class ModifierFactory extends Factory {

    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new vengefulModifier(affector));
            this.items.push(new ultimateModifier(affector));
            this.items.push(new signatureModifier(affector));
            this.items.push(new selfHealModifier(affector));
            this.items.push(new restedModifer(affector));
            this.items.push(new repeatableModifier(affector));
            this.items.push(new opportunistModifier(affector));
            this.items.push(new nightlyModifier(affector));
            this.items.push(new multipleModifier(affector));
            this.items.push(new undeadBaneModifier(affector));
            this.items.push(new momentumModifier(affector));
            this.items.push(new lifestealModifier(affector));
            this.items.push(new laylineModifier(affector));
            this.items.push(new grazedModifier(affector));
            this.items.push(new gainEffectModifier(affector));
            this.items.push(new fastModifier(affector));
            this.items.push(new exhaustingModifer(affector));
            this.items.push(new templeModifier(affector));
            this.items.push(new pristineModifier(affector));
            this.items.push(new preachingModifier(affector));
            this.items.push(new pacifistModifier(affector));
            this.items.push(new candleModifier(affector));
            this.items.push(new cleaveModifier(affector));
            this.items.push(new bloodiedModifier(affector));
            this.items.push(new applyEffectModifier(affector));
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

    
  public static getDPSBonus(modifiers : Modifier[], affector : AffectsWeight): number {
    let dps: number = 0;

    modifiers.forEach(m => {
      if(m.powerBonus) {
        dps += m.powerBonus(affector);
      }
    });

    return dps;
  }
  
  public static getDPSMultiplier(modifiers : Modifier[], affector : AffectsWeight): number {
    let dps: number = 1

    modifiers.forEach(m => {
      if(m.powerMultiplier) {
        dps *= m.powerMultiplier(affector); 
      }
    })

    return dps;
  }
    
}