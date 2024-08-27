import { AbilityObject } from "../../abilityObject";

export class freshCorpseAbilityObject extends AbilityObject {
    
    constructor() {
        super('Fresh Corpse');        
        this.description = 'any fresh humanoid corpse (3 days or less)';
        this.rarity = 1.1;
        this.prefix = 'Fresh'

        this.isCorpse = true;
    }
}
