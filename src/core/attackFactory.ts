import { AffectsWeight } from "./affectsWeight.js";
import { Factory } from "./factory.js";
import { WeightedList } from "./weightedList.js";
import { Attack } from "./attack.js";
import { ContentFilter, Vendor } from "./vendor.js";

//factory imports
import { weapons } from "./attackTables/weapons.js";
import { spells } from "./attackTables/spells.js";
import { wizardAttacks } from "./attackTables/classAttacks/wizardAttacks.js";
export class AttackFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            weapons().forEach(x => this.items.push(x));
            spells().forEach(x => this.items.push(x));
            wizardAttacks().forEach(x => this.items.push(x));
        } else {
            this.items = list;
        }
    }
    
    public get(count: number) {
        return super.get(count) as Attack[];
    }
    
    public filter(z: (x: any) => boolean): AttackFactory {
        return super.filter(z) as AttackFactory;
    }

    protected vendorFilter(): ContentFilter {
        return Vendor.active ? Vendor.active.attackFilter : Vendor.ALL;
    }

    protected canSellNothing(): boolean {
        return true;
    }
}