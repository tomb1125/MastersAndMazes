import { AbilityObject } from "../../abilityObject";

export class symetricEmpathicAbilityObject extends AbilityObject {
    
    constructor() {
        super('Symetric Empathy');        
        this.description = 'For the duration you can sense and send emotions to each other as long as you\' re close to each other. ';
        this.rarity = 0.8;
        this.prefix = 'Empathic'

        this.isCommunication = true;
    }
}
