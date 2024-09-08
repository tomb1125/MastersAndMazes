import { AbilityObject } from "../../abilityObject";

export class soulStealingAbilityObject extends AbilityObject {
    
    constructor() {
        super('Soul Steal');        
        this.description = 'any person you killed or assisted in killing.';
        this.rarity = 0.5;
        this.prefix = 'Soul Stealing'

        this.isCorpse = true;
    }
}
