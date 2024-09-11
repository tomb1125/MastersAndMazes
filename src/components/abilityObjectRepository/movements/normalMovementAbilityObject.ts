import { AbilityObject } from "../../abilityObject";

export class normalMovementAbilityObject extends AbilityObject {
    
    constructor() {
        super('Normal Movement');        
        this.description = '';
        this.rarity = 1;
        this.weight = () => {return 1};
        this.prefix = ''

        this.isMovement = true;
    }
}
