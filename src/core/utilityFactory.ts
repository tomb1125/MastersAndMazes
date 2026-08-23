import { AffectsWeight } from "./affectsWeight.js";
import { Factory } from "./factory.js";
import { Utility } from "./utility.js";
import { ContentFilter, Vendor } from "./vendor.js";
import { WeightedList } from "./weightedList.js";

//factory imports
import { constructions } from "./utilityTables/constructions.js";
import { wizardUtilities } from "./utilityTables/classUtilities/wizardUtilities.js";
import { fighterUtilities } from "./utilityTables/classUtilities/fighterUtilities.js";
export class UtilityFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            constructions().forEach(x => this.items.push(x));
            wizardUtilities().forEach(x => this.items.push(x));
            fighterUtilities().forEach(x => this.items.push(x));
        } else {
            this.items = list;
        }
    }

    
    public get(count: number) {
        return super.get(count) as Utility[];
    }

    protected vendorFilter(): ContentFilter {
        return Vendor.active ? Vendor.active.utilityFilter : Vendor.ALL;
    }

    protected canSellNothing(): boolean {
        return true;
    }
}