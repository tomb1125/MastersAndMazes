import { WeightedList } from "../core/weightedList.js";
import { Modifier } from "./modifier.js"
import { AffectsWeight } from "../core/affectsWeight.js";
import { Factory } from "../core/factory.js";
//factory imports
import { manaFumeModifier } from "./modifiersRepository/wizardModifiers/manaFumeModifier.js";
import { vengefulModifier } from "./modifiersRepository/vengefulModifier.js";
import { ultimateModifier } from "./modifiersRepository/ultimateModifier.js";
import { signatureModifier } from "./modifiersRepository/signatureModifier.js";
import { selfHealModifier } from "./modifiersRepository/selfHealModifier.js";
import { trinketModifier } from "./modifiersRepository/rogueModifiers/trinketModifier.js";
import { sneakyModifier } from "./modifiersRepository/rogueModifiers/sneakyModifier.js";
import { greedyModifier } from "./modifiersRepository/rogueModifiers/greedyModifier.js";
import { daggerModifier } from "./modifiersRepository/rogueModifiers/daggerModifier.js";
import { cityModifier } from "./modifiersRepository/rogueModifiers/cityModifier.js";
import { restedModifer } from "./modifiersRepository/restedModifer.js";
import { repeatableModifier } from "./modifiersRepository/repeatableModifier.js";
import { piercingModifier } from "./modifiersRepository/piercingModifier.js";
import { opportunistModifier } from "./modifiersRepository/opportunistModifier.js";
import { multipleModifier } from "./modifiersRepository/multipleModifier.js";
import { undeadBaneModifier } from "./modifiersRepository/multiclassModifiers/undeadBaneModifier.js";
import { siegeModifier } from "./modifiersRepository/multiclassModifiers/siegeModifier.js";
import { cleanModifier } from "./modifiersRepository/multiclassModifiers/cleanModifier.js";
import { momentumModifier } from "./modifiersRepository/momentumModifier.js";
import { mobileModifier } from "./modifiersRepository/mobileModifier.js";
import { masterfulModifier } from "./modifiersRepository/masterfulModifier.js";
import { managainModifier } from "./modifiersRepository/managainModifier.js";
import { lifestealModifier } from "./modifiersRepository/lifestealModifier.js";
import { laylineModifier } from "./modifiersRepository/laylineModifier.js";
import { instinctiveModifier } from "./modifiersRepository/instinctiveModifier.js";
import { grazedModifier } from "./modifiersRepository/grazedModifier.js";
import { gainEffectModifier } from "./modifiersRepository/gainEffectModifier.js";
import { fullActionModifier } from "./modifiersRepository/fullActionModifier.js";
import { forcefulModifier } from "./modifiersRepository/forcefulModifier.js";
import { weaponmasterModifier } from "./modifiersRepository/fighterModifiers/weaponmasterModifier.js";
import { legendaryWeaponModifier } from "./modifiersRepository/fighterModifiers/legendaryWeaponModifier.js";
import { followupModifier } from "./modifiersRepository/fighterModifiers/followupModifier.js";
import { breachingModifier } from "./modifiersRepository/fighterModifiers/breachingModifier.js";
import { battleModifier } from "./modifiersRepository/fighterModifiers/battleModifier.js";
import { armoredModifier } from "./modifiersRepository/fighterModifiers/armoredModifier.js";
import { fastModifier } from "./modifiersRepository/fastModifier.js";
import { exhaustingModifer } from "./modifiersRepository/exhaustingModifer.js";
import { compensationModifier } from "./modifiersRepository/compensationModifier.js";
import { templeModifier } from "./modifiersRepository/clericModifiers/templeModifier.js";
import { pristineModifier } from "./modifiersRepository/clericModifiers/pristineModifier.js";
import { preachingModifier } from "./modifiersRepository/clericModifiers/preachingModifier.js";
import { pacifistModifier } from "./modifiersRepository/clericModifiers/pacifistModifier.js";
import { episcopalModifier } from "./modifiersRepository/clericModifiers/episcopalModifier.js";
import { candleModifier } from "./modifiersRepository/clericModifiers/candleModifier.js";
import { cleaveModifier } from "./modifiersRepository/cleaveModifier.js";
import { brightModifier } from "./modifiersRepository/brightModifier.js";
import { bloodiedModifier } from "./modifiersRepository/bloodiedModifier.js";
import { applyEffectModifier } from "./modifiersRepository/applyEffectModifier.js";
export class ModifierFactory extends Factory {

    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new manaFumeModifier(affector));
            this.items.push(new vengefulModifier(affector));
            this.items.push(new ultimateModifier(affector));
            this.items.push(new signatureModifier(affector));
            this.items.push(new selfHealModifier(affector));
            this.items.push(new trinketModifier(affector));
            this.items.push(new sneakyModifier(affector));
            this.items.push(new greedyModifier(affector));
            this.items.push(new daggerModifier(affector));
            this.items.push(new cityModifier(affector));
            this.items.push(new restedModifer(affector));
            this.items.push(new repeatableModifier(affector));
            this.items.push(new piercingModifier(affector));
            this.items.push(new opportunistModifier(affector));
            this.items.push(new multipleModifier(affector));
            this.items.push(new undeadBaneModifier(affector));
            this.items.push(new siegeModifier(affector));
            this.items.push(new cleanModifier(affector));
            this.items.push(new momentumModifier(affector));
            this.items.push(new mobileModifier(affector));
            this.items.push(new masterfulModifier(affector));
            this.items.push(new managainModifier(affector));
            this.items.push(new lifestealModifier(affector));
            this.items.push(new laylineModifier(affector));
            this.items.push(new instinctiveModifier(affector));
            this.items.push(new grazedModifier(affector));
            this.items.push(new gainEffectModifier(affector));
            this.items.push(new fullActionModifier(affector));
            this.items.push(new forcefulModifier(affector));
            this.items.push(new weaponmasterModifier(affector));
            this.items.push(new legendaryWeaponModifier(affector));
            this.items.push(new followupModifier(affector));
            this.items.push(new breachingModifier(affector));
            this.items.push(new battleModifier(affector));
            this.items.push(new armoredModifier(affector));
            this.items.push(new fastModifier(affector));
            this.items.push(new exhaustingModifer(affector));
            this.items.push(new compensationModifier(affector));
            this.items.push(new templeModifier(affector));
            this.items.push(new pristineModifier(affector));
            this.items.push(new preachingModifier(affector));
            this.items.push(new pacifistModifier(affector));
            this.items.push(new episcopalModifier(affector));
            this.items.push(new candleModifier(affector));
            this.items.push(new cleaveModifier(affector));
            this.items.push(new brightModifier(affector));
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