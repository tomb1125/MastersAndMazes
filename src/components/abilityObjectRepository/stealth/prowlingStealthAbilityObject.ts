import { AbilityObject } from "../../abilityObject";

export class prowlingStealthAbilityObject extends AbilityObject {
    
    constructor() {
        super('Prowling Stealth');        
        this.description = 'First attack you make within 10 minutes of using this ability deals +10 bonus damage. ';
        this.rarity = 1.6;
        this.prefix = 'Prowling'

        this.isStealth = true;
    }
}
