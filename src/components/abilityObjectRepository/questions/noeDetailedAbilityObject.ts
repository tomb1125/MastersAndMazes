import { AbilityObject } from "../../abilityObject";

export class noeDetailedAbilityObject extends AbilityObject {
    
    constructor() {
        super('Noe');        
        this.description = 'Questions are answered truthfully in one sentence, but only if question does not contain letter "e". ';
        this.rarity = 0.7;
        this.prefix = 'Noe'

        this.isQuestion = true;
    }
}
