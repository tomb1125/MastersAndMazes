import { AbilityObject } from "../../abilityObject";

export class detailedAbilityObject extends AbilityObject {
    
    constructor() {
        super('Detailed');        
        this.description = 'Questions are answered truthfully, in one or two sentences including details you should be interested in. ';
        this.rarity = 3;
        this.prefix = 'Detailed'

        this.isQuestion = true;
    }
}
