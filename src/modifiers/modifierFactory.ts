import { WeightedList } from "../core/weightedList.js";
import { Modifier } from "./modifier.js"
import { AffectsWeight } from "../core/affectsWeight.js";
import { Factory } from "../core/factory.js";
import { ContentFilter, Vendor } from "../core/vendor.js";
//factory imports
import { manaFumeModifier } from "./modifiersRepository/wizardModifiers/manaFumeModifier.js";
import { repeatableModifier } from "./modifiersRepository/repeatableModifier.js";
import { grazedModifier } from "./modifiersRepository/grazedModifier.js";
import { compensationModifier } from "./modifiersRepository/compensationModifier.js";
import { applyEffectModifier } from "./modifiersRepository/applyEffectModifier.js";
export class ModifierFactory extends Factory {

    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new manaFumeModifier(affector));
            this.items.push(new repeatableModifier(affector));
            this.items.push(new grazedModifier(affector));
            this.items.push(new compensationModifier(affector));
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

    protected vendorFilter(): ContentFilter {
        return Vendor.active ? Vendor.active.modifierFilter : Vendor.ALL;
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