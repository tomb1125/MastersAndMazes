import { AbilityObject } from "../../abilityObject";

export class dreamConnectionAbilityObject extends AbilityObject {
    
    constructor() {
        super('Dream Connection');        
        this.description = 'Upon casting the spell seemingly has no effect, but you will see the target in your dream tonight, and then you will be able to talk. ';
        this.rarity = 0.6;
        this.prefix = 'Dream Connecting'

        this.isCommunication = true;
    }
}
