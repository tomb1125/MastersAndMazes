import { AffectsWeight } from "../core/affectsWeight.js";
import { Factory } from "../core/factory.js";
import { WeightedList } from "../core/weightedList.js";
import { AbilityObject } from "./abilityObject.js";
import { ContentFilter, Vendor } from "../core/vendor.js";

//factory imports
import { paperMaterialAbilityObject } from "./abilityObjectRepository/bulkMaterials/paperMaterialAbilityObject.js";
import { brickMaterialAbilityObject } from "./abilityObjectRepository/bulkMaterials/brickMaterialAbilityObject.js";
export class AbilityObjectFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new paperMaterialAbilityObject());
            this.items.push(new brickMaterialAbilityObject());
        } else {
            this.items = list;
        }
    }

    
    public get(count: number) {
        return super.get(count) as AbilityObject[];
    }

    public filter(z: (x: any) => boolean): AbilityObjectFactory {
        return super.filter(z) as AbilityObjectFactory;
    }

    protected vendorFilter(): ContentFilter {
        return Vendor.active ? Vendor.active.abilityObjectFilter : Vendor.ALL;
    }
}