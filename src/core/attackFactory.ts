import { AffectsWeight } from "./affectsWeight";
import { Factory } from "./factory";
import { WeightedList } from "./weightedList";
import { Attack } from "./attack";

//factory imports
import { poisonedDartAttack } from "./attackRepository/rogueAttacks/poisonedDartAttack";
import { backstabAttack } from "./attackRepository/rogueAttacks/backstabAttack";
import { stanceAttack } from "./attackRepository/fighterAttacks/stanceAttack";
import { radiantRayAttack } from "./attackRepository/clericAttacks/radiantRayAttack";
import { empoweringStrikeAttack } from "./attackRepository/clericAttacks/empoweringStrikeAttack";
import { basicSpell } from "./attackRepository/basicSpell";
import { basicAttack } from "./attackRepository/basicAttack";
export class AttackFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new poisonedDartAttack(affector));
            this.items.push(new backstabAttack(affector));
            this.items.push(new stanceAttack(affector));
            this.items.push(new radiantRayAttack(affector));
            this.items.push(new empoweringStrikeAttack(affector));
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
}