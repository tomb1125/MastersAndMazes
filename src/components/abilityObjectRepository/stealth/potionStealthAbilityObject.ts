import { AbilityObject } from "../../abilityObject";

export class potionStealthAbilityObject extends AbilityObject {
    
    constructor() {
        super('Potion Stealth');        
        this.description = 'You must drink special Invisibility Potion before using this ability (additional uses from Repeatable modifier do not require this). Each costs 10G and is a rare consumable. When you add this ability to your character gain 5 such potions. ';
        this.rarity = 1;
        this.prefix = 'Potion'

        this.isStealth = true;
    }
}
