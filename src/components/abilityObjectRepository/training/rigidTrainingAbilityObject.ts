import { AbilityObject } from "../../abilityObject";

export class rigidTrainingAbilityObject extends AbilityObject {
    
    constructor() {
        super('Rigid Training');        
        this.description = 'As long as you benefit from training reduce your maximum Health by 5. ';
        this.rarity = 0.7;
        this.prefix = 'Rigid'

        this.isTraining = true;
    }
}
