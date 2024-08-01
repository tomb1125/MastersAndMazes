import { AbilityObject } from "../../abilityObject";

export class gainUnderstandingAbilityObject extends AbilityObject {
    
    constructor() {
        super('Gain Understanding');        
        this.description = 'For the duration you can speak in your languages, yet you can understand each other. ';
        this.rarity = 1;

        this.isCommunication = true;
    }
}
