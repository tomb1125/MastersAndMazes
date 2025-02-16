import { AbilityObject } from "../../abilityObject";

export class brickMaterialAbilityObject extends AbilityObject {
    
    constructor() {
        super('Brick Material');        
        this.description = ' is made out of lose stone and lasts until destroyed. 1 Square of a brick material has 50 Health, though even if reduced to 0 Health it crumbles at the end of enemy turn. ';
        this.rarity = 2;
        this.prefix = 'Brick'

        this.isBulkMaterial = true;
    }
}
