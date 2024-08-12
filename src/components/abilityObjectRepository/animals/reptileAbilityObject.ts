import { AbilityObject } from "../../abilityObject";

export class reptileAbilityObject extends AbilityObject {
    
    constructor() {
        super('Reptile');        
        this.description = 'any reptile or amphibian';
        this.rarity = 0.4;
        this.prefix = 'Reptile'

        this.isAnimal = true;
    }
}
