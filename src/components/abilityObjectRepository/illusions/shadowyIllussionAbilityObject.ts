import { AbilityObject } from "../../abilityObject";

export class shadowyIllussionAbilityObject extends AbilityObject {
    
    constructor() {
        super('Shadowy Illusion');        
        this.description = 'The illussion affects all senses but touch only to some extend. It also appears shadowy - if exposed to bright light, it\'s nature is quickly revealed (torch is not a bright light)';
        this.rarity = 0.7;
        this.weight = () => {return 1};
        this.prefix = 'Shadow'

        this.isIllusion = true;
    }
}
