import { AbilityObject } from "../../abilityObject";

export class forceMaterialAbilityObject extends AbilityObject {
    
    constructor() {
        super('Force Material');        
        this.description = ' is made out of Force and cannot be destroyed. It lasts 3 turns. ';
        this.rarity = 1.5;
        this.prefix = 'Force'

        this.isBulkMaterial = true;
    }
}
