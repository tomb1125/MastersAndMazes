import { AbilityObject } from "../../abilityObject";

export class harmlessStealthAbilityObject extends AbilityObject {
    
    constructor() {
        super('Harmless Stealth');        
        this.description = 'First attack you make within 10 minutes of using this ability has 3 Banes. ';
        this.rarity = 0.7;
        this.prefix = 'Harmless'

        this.isStealth = true;
    }
}
