import { AbilityObject } from "../../abilityObject";

export class paperMaterialAbilityObject extends AbilityObject {
    
    constructor() {
        super('Paper Material');        
        this.description = ' is made out of paper and lasts until destroyed. 1 Square of a paper has 1 Health. It can be run through but it costs extra 3 squares of movement. ';
        this.rarity = 0.3;
        this.weight = () => {return 0.5};
        this.prefix = 'Paper'

        this.isBulkMaterial = true;
    }
}
