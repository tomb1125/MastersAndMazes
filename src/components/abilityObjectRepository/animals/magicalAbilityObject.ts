import { AbilityObject } from "../../abilityObject";

export class magicalAbilityObject extends AbilityObject {
    
    constructor() {
        super('Magical');        
        this.description = 'any elemental, magical or otherwise enhanced animal';
        this.rarity = 0.4;
        this.prefix = 'Magical'

        this.isAnimal = true;
    }
}
