import { AbilityObject } from "../../abilityObject";

export class commonIllussionAbilityObject extends AbilityObject {
    
    constructor() {
        super('Common Illusion');        
        this.description = 'The illussion affects all senses but touch only to some extend. Touching illusionory wall will not reveal its fake nature, but ramming through it with full force will dispell it.';
        this.rarity = 1.4;
        this.weight = () => {return 1.5};
        this.prefix = 'Common'

        this.isIllusion = true;
    }
}
