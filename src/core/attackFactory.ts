import { AffectsWeight } from "./affectsWeight";
import { Factory } from "./factory";
import { WeightedList } from "./weightedList";
import { Attack } from "./attack";

//factory imports
import { fireballAttack } from "./attackRepository/wizardAttacks/fireballAttack";
import { chainLightningAttack } from "./attackRepository/wizardAttacks/chainLightningAttack";
import { poisonedDartAttack } from "./attackRepository/rogueAttacks/poisonedDartAttack";
import { backstabAttack } from "./attackRepository/rogueAttacks/backstabAttack";
import { stanceAttack } from "./attackRepository/fighterAttacks/stanceAttack";
import { heavyAttack } from "./attackRepository/fighterAttacks/heavyAttack";
import { divineStrikeAttack } from "./attackRepository/clericAttacks/divineStrikeAttack";
import { divineFlameAttack } from "./attackRepository/clericAttacks/divineFlameAttack";
import { basicSpell } from "./attackRepository/basicSpell";
import { basicAttack } from "./attackRepository/basicAttack";
export class AttackFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new fireballAttack(affector));
            this.items.push(new chainLightningAttack(affector));
            this.items.push(new poisonedDartAttack(affector));
            this.items.push(new backstabAttack(affector));
            this.items.push(new stanceAttack(affector));
            this.items.push(new heavyAttack(affector));
            this.items.push(new divineStrikeAttack(affector));
            this.items.push(new divineFlameAttack(affector));
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