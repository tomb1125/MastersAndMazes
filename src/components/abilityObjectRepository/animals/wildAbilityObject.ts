import { AbilityObject } from "../../abilityObject";

export class wildAbilityObject extends AbilityObject {
    
    constructor() {
        super('Wild');        
        this.description = 'any wild, not domesticated nor city, animal';
        this.rarity = 0.7;
        this.weight = () => 2;
        this.prefix = 'Wild'

        this.isAnimal = true;
    }
}
