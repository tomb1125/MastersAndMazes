import { WeightedList } from "../core/weightedList.js";
import { Modifier } from "./modifier.js"
import { Factory } from "../core/factory.js";
import { AffectsWeight } from "../core/affectsWeight.js";
//factory imports
import { debuffs } from "./effectTables/debuffs.js";
export class EffectFactory extends Factory {

    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            debuffs().forEach(x => this.items.push(x));
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

    // No vendorFilter override: effects are reached only through modifiers, so a vendor
    // narrows them by way of its modifierFilter. Add a Vendor.effectFilter slot here if
    // that stops being true.

    
}