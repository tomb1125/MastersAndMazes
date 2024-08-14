import { AbilityObject } from "../../abilityObject";

export class symetricTelepathyAbilityObject extends AbilityObject {
    
    constructor() {
        super('Symetric Empathy');        
        this.description = 'For the duration you can read each other minds as long as you\'re close to each other. ';
        this.rarity = 1.2;
        this.prefix = 'Emphatic'

        this.isCommunication = true;
    }
}
