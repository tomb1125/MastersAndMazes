import { AbilityObject } from "../../abilityObject";

export class unfinishedBusinessAbilityObject extends AbilityObject {
    
    constructor() {
        super('Unfinished Business');        
        this.description = 'any corpse of a person with unfinished business';
        this.rarity = 1;
        this.prefix = 'Completing'

        this.isCorpse = true;
    }
}
