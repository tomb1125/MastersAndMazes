import { AbilityObject } from "../../abilityObject";

export class ratAbilityObject extends AbilityObject {
    
    constructor() {
        super('Rat');        
        this.description = 'any rat or other rodent';
        this.rarity = 0.3;
        this.prefix = 'Rodent'

        this.isAnimal = true;
    }
}
