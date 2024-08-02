import { AbilityObject } from "../../abilityObject";

export class catAbilityObject extends AbilityObject {
    
    constructor() {
        super('Cat');        
        this.description = 'any feline';
        this.rarity = 0.3;
        this.prefix = 'Feline'

        this.isAnimal = true;
    }
}
