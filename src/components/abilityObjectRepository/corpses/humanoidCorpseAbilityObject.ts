import { AbilityObject } from "../../abilityObject";

export class humanoidCorpseAbilityObject extends AbilityObject {
    
    constructor() {
        super('Humanoid Corpse');        
        this.description = 'any humanoid corpse';
        this.rarity = 1.4;
        this.weight = () => {return 1.5};
        this.prefix = 'Humanoid'

        this.isCorpse = true;
    }
}
