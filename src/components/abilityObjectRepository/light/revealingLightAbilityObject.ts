import { AbilityObject } from "../../abilityObject";

export class revealingLightAbilityObject extends AbilityObject {
    
    constructor() {
        super('Revealing');        
        this.description = 'The light reveals invisible creatures and illussions. ';
        this.rarity = 1.4;
        this.prefix = 'Revealing'

        this.isLight = true;
    }
}
