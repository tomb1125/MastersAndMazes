import { AbilityObject } from "../../abilityObject";

export class controllableLightAbilityObject extends AbilityObject {
    
    constructor() {
        super('Controllable');        
        this.description = 'The light can be moved by 10 meters, disabled or enabled, by a swift action. ';
        this.rarity = 1.1;
        this.prefix = 'Controllable'

        this.isLight = true;
    }
}
