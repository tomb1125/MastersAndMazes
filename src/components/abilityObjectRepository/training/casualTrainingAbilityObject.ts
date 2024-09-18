import { AbilityObject } from "../../abilityObject";

export class casualTrainingAbilityObject extends AbilityObject {
    
    constructor() {
        super('Casual Training');        
        this.description = 'When you are reduced to 0 Health you lose non-permament benefits of training. ';
        this.rarity = 0.5;
        this.prefix = 'Casual'

        this.isTraining = true;
    }
}
