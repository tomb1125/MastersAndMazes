import { AbilityObject } from "../../abilityObject";

export class humanoidAbilityObject extends AbilityObject {
    
    constructor() {
        super('Humanoid');        
        this.description = 'any humanoid';
        this.rarity = 1.6;
        this.weight = () => {return 1.5};
        this.prefix = 'Common'

        this.isPerson = true;
    }
}
