import { AbilityObject } from "../../abilityObject";

export class shadowStealthAbilityObject extends AbilityObject {
    
    constructor() {
        super('Shadow Stealth');        
        this.description = 'You cannot cross any well lit path or this ability fails (one torch is not enough to well lit area though). ';
        this.rarity = 2;
        this.prefix = 'Shadow'

        this.isStealth = true;
    }
}
