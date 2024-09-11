import { AbilityObject } from "../../abilityObject";

export class straightMovementAbilityObject extends AbilityObject {
    
    constructor() {
        super('Straigth Movement');        
        this.description = 'This movement must be made in a straigth line. ';
        this.rarity = 0.9;
        this.weight = () => {return 1};
        this.prefix = 'Straigth'

        this.isMovement = true;
    }
}
