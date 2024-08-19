import { AbilityObject } from "../../abilityObject";

export class oneWordAbilityObject extends AbilityObject {
    
    constructor() {
        super('One Word');        
        this.description = 'Your question cannot be a yes/no question and will be answered truthfully with one word. ';
        this.rarity = 0.9;
        this.prefix = 'One Word'

        this.isQuestion = true;
    }
}
