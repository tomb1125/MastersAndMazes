import { AbilityObject } from "../../abilityObject";

export class gainUnderstandingAbilityObject extends AbilityObject {
    
    constructor() {
        super('Cat');        
        this.description = 'any feline';
        this.rarity = 0.3;

        this.isAnimal = true;
    }
}
