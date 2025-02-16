import { AbilityObject } from "../../abilityObject";

export class detailedIllussionAbilityObject extends AbilityObject {
    
    constructor() {
        super('Detailed Illusion');        
        this.description = 'The illussion affects all senses but touch only to some extend. You can create very detailed works, with spelling filling gaps in your knowledge. For example: a perfectly fine document of house ownership or an illusionary orchestra playing symphony you couldn\'t possible know.';
        this.rarity = 1;
        this.weight = () => {return 1.5};
        this.prefix = 'Detailed'

        this.isIllusion = true;
    }
}
