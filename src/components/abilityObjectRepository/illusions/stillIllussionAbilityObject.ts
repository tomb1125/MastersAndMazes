import { AbilityObject } from "../../abilityObject";

export class stillIllussionAbilityObject extends AbilityObject {
    
    constructor() {
        super('Still Illusion');        
        this.description = 'This illusion only affects sight (so putting hand through it immidietly reveals it as fake).';
        this.rarity = 0.3;
        this.weight = () => {return 1};
        this.prefix = 'Still'

        this.isIllusion = true;
    }
}
