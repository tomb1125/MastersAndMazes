import { AbilityObject } from "../../abilityObject";

export class birdAbilityObject extends AbilityObject {
    
    constructor() {
        super('Bird');        
        this.description = 'any bird';
        this.rarity = 0.5;
        this.prefix = 'Avian'

        this.isAnimal = true;
    }
}
