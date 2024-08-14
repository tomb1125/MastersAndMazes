import { AbilityObject } from "../../abilityObject";

export class yesNoAbilityObject extends AbilityObject {
    
    constructor() {
        super('Yes/No');        
        this.description = 'Questions must be a Yes or No question, but will be answered truthfully. ';
        this.rarity = 1.2;
        this.prefix = 'Yes/No'

        this.isQuestion = true;
    }
}
