import { AffectsWeight } from "./affectsWeight.js";
import { Factory } from "./factory.js";
import { WeightedList } from "./weightedList.js";
import { Attack } from "./attack.js";
import { ContentFilter, Vendor } from "./vendor.js";

//factory imports
import { fireballAttack } from "./attackRepository/fireballAttack.js";
import { basicSpell } from "./attackRepository/basicSpell.js";
import { basicAttack } from "./attackRepository/basicAttack.js";
export class AttackFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new fireballAttack(affector));
            this.items.push(new basicSpell(affector));
            this.items.push(new basicAttack(affector));
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