import { AbilityObject } from "../../abilityObject";

export class teachingTrainingAbilityObject extends AbilityObject {
    
    constructor() {
        super('Teaching');        
        this.description = 'One of your allies benefit from this training as well. ';
        this.rarity = 2;
        this.prefix = 'Teaching'

        this.isTraining = true;
    }
}
