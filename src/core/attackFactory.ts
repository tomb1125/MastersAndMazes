import { AffectsWeight } from "./affectsWeight.js";
import { Factory } from "./factory.js";
import { WeightedList } from "./weightedList.js";
import { Attack } from "./attack.js";

//factory imports
import { fireballAttack } from "./attackRepository/wizardAttacks/fireballAttack.js";
import { chainLightningAttack } from "./attackRepository/wizardAttacks/chainLightningAttack.js";
import { poisonedDartAttack } from "./attackRepository/rogueAttacks/poisonedDartAttack.js";
import { backstabAttack } from "./attackRepository/rogueAttacks/backstabAttack.js";
import { stanceAttack } from "./attackRepository/fighterAttacks/stanceAttack.js";
import { heavyAttack } from "./attackRepository/fighterAttacks/heavyAttack.js";
import { divineStrikeAttack } from "./attackRepository/clericAttacks/divineStrikeAttack.js";
import { divineFlameAttack } from "./attackRepository/clericAttacks/divineFlameAttack.js";
import { basicSpell } from "./attackRepository/basicSpell.js";
import { basicAttack } from "./attackRepository/basicAttack.js";
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