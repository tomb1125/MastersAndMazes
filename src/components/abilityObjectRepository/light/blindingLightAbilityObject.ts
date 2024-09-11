import { AbilityObject } from "../../abilityObject";

export class blindingLightAbilityObject extends AbilityObject {
    
    constructor() {
        super('Blinding');        
        this.description = 'All enemies have 1 Bane for attack rolls in this area, this effect does not stack with any other Banes. ';
        this.rarity = 4;
        this.prefix = 'Blinding'

        this.isLight = true;
    }
}
