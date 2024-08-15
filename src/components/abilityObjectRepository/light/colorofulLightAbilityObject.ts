import { AbilityObject } from "../../abilityObject";

export class colorfulLightAbilityObject extends AbilityObject {
    
    constructor() {
        super('Colorful');        
        this.description = 'The light can have any color you want and you can change its color by swift action. ';
        this.rarity = 1;
        this.prefix = 'Colorful'

        this.isLight = true;
    }
}
