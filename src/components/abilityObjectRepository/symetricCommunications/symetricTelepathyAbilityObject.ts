import { AbilityObject } from "../../abilityObject";

export class symetricTelepathyAbilityObject extends AbilityObject {
    
    constructor() {
        super('Symetric Telepathy');        
        this.description = 'For the duration you can read each other minds as long as you\'ve seen the target within an hour. ';
        this.rarity = 1.2;

        this.isCommunication = true;
    }
}
