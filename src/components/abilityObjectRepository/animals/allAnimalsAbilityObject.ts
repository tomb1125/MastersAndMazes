import { AbilityObject } from "../../abilityObject";

export class allAnimalsAbilityObject extends AbilityObject {
    
    constructor() {
        super('AllAnimals');        
        this.description = 'any animal';
        this.rarity = 1;

        this.isAnimal = true;
    }
}
