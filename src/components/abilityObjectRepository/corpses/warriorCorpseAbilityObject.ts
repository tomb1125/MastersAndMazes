import { AbilityObject } from "../../abilityObject";

export class warriorCorpseAbilityObject extends AbilityObject {
    
    constructor() {
        super('Warrior Corpse');        
        this.description = 'any corpse of a warrior or someone with fighting spirit';
        this.rarity = 0.8;
        this.prefix = 'Warrior'

        this.isCorpse = true;
    }
}
