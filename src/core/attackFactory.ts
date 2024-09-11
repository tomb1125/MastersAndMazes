import { AffectsWeight } from "./affectsWeight";
import { Factory } from "./factory";
import { Utility } from "./utility";
import { WeightedList } from "./weightedList";

//factory imports
import { backstabAttack } from "./attackRepository/rogueAttacks/backstabAttack";
import { radiantRayAttack } from "./attackRepository/clericAttacks/radiantRayAttack";
import { basicAttack } from "./attackRepository/basicAttack";
export class AttackFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new backstabAttack(affector));
            this.items.push(new radiantRayAttack(affector));
            this.items.push(new basicAttack(affector));
        } else {
            this.items = list;
        }
    }
    
    public get(count: number) {
        return super.get(count) as Utility[];
    }
    
    public filter(z: (x: any) => boolean): AttackFactory {
        return super.filter(z) as AttackFactory;
    }
}