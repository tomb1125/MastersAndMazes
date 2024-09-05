import { AbilityObject } from "../../abilityObject";

export class warriorHumanoidAbilityObject extends AbilityObject {
    
    constructor() {
        super('Warrior');        
        this.description = 'any warrior, soldier or someone of martial abilities';
        this.rarity = 0.8;
        this.prefix = 'Warrior'

        this.isPerson = true;
    }
}
