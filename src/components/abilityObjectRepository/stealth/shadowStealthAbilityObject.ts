import { AbilityObject } from "../../abilityObject";

export class shadowStealthAbilityObject extends AbilityObject {
    
    constructor() {
        super('Shadow Stealth');        
        this.description = 'Any bright light immiedietly reveals you (one torch is not enough to well lit area though). ';
        this.rarity = 1.7;
        this.prefix = 'Dark'

        this.isStealth = true;
    }
}
