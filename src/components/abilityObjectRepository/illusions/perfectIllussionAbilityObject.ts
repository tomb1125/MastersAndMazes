import { AbilityObject } from "../../abilityObject";

export class perfectIllussionAbilityObject extends AbilityObject {
    
    constructor() {
        super('Perfect Illusion');        
        this.description = 'The illussion perfectly affects every sense, can be detailed and even can modify itself to maintain the deception. Illusionary person can pick up pen and sign document, walking on bridge feels fine without you noticing that you are already falling, fake dagger cuts rope that appears intact after duration of illusion end. Limits of this power is determined by GM but still is vast.';
        this.rarity = 3;
        this.weight = () => {return 1};
        this.prefix = 'Perfect'

        this.isIllusion = true;
    }
}
