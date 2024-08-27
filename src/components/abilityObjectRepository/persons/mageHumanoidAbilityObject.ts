import { AbilityObject } from "../../abilityObject";

export class mageHumanoidAbilityObject extends AbilityObject {
    
    constructor() {
        super('Mage');        
        this.description = 'any mage, cleric or practicioner of magic';
        this.rarity = 0.8;
        this.prefix = 'Mage'

        this.isPerson = true;
    }
}
