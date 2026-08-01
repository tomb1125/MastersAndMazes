import { AbilityObject } from "../../abilityObject.js";

export class soundIllussionAbilityObject extends AbilityObject {
    
    constructor() {
        super('Sound Illusion');        
        this.description = 'This illusion only affects sound.';
        this.rarity = 0.4;
        this.weight = () => {return 1};
        this.prefix = 'Still'

        this.isIllusion = true;
    }
}
