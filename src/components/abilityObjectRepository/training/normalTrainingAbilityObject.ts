import { AbilityObject } from "../../abilityObject";

export class normalTrainingAbilityObject
 extends AbilityObject {
    
    constructor() {
        super('Common Training');        
        this.description = '';
        this.rarity = 1;
        this.prefix = 'Common'

        this.isTraining = true;
    }
}
