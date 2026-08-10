import { AffectsWeight } from "./affectsWeight.js";
import { Factory } from "./factory.js";
import { Utility } from "./utility.js";
import { WeightedList } from "./weightedList.js";

//factory imports
import { wallUtility } from "./utilityRepository/wizardUtilities/wallUtility.js";
export class UtilityFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new wallUtility());
        } else {
            this.items = list;
        }
    }

    
    public get(count: number) {
        return super.get(count) as Utility[];
    }
    
    public filter(z: (x: any) => boolean): UtilityFactory {
        return super.filter(z) as UtilityFactory;
    }
}