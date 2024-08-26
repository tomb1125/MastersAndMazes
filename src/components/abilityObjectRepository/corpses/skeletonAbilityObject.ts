import { AbilityObject } from "../../abilityObject";

export class skeletonAbilityObject extends AbilityObject {
    
    constructor() {
        super('Skeleton');        
        this.description = 'any skeleton (humanoid who died at least 10 years ago)';
        this.rarity = 0.7;
        this.prefix = 'Skeleton'

        this.isCorpse = true;
    }
}
