import { AbilityObject } from "../../abilityObject";

export class stoneMaterialAbilityObject extends AbilityObject {
    
    constructor() {
        super('Stone Material');        
        this.description = ' is made out of lose stone and lasts until destroyed. 1 Square of a stone has 20 Health, though even if reduced to 0 Health it crumbles at the end of enemy turn. ';
        this.rarity = 1;
        this.weight = () => {return 1.5};
        this.prefix = 'Stone'

        this.isBulkMaterial = true;
    }
}
