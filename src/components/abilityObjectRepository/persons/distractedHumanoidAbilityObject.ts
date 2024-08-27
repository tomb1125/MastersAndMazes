import { AbilityObject } from "../../abilityObject";

export class distractedHumanoidAbilityObject extends AbilityObject {
    
    constructor() {
        super('Distracted Humanoid');        
        this.description = 'any distracted humanoid';
        this.rarity = 1.2;
        this.prefix = 'Distracted'

        this.isPerson = true;
    }
}
