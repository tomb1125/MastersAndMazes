import { AbilityObject } from "../../abilityObject";

export class unarmoredStealthAbilityObject extends AbilityObject {
    
    constructor() {
        super('Unarmored Stealth');        
        this.description = 'You cannot wear armor when you use this ability. ';
        this.rarity = 0.7;
        this.prefix = 'Unarmored'

        this.isStealth = true;
    }
}
