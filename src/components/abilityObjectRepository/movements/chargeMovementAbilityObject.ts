import { AbilityObject } from "../../abilityObject";

export class chargeMovementAbilityObject extends AbilityObject {
    
    constructor() {
        super('Charge Movement');        
        this.description = 'During movement you can push each adjacent enemy 2 squares. ';
        this.rarity = 1.2;
        this.weight = () => {return 1};
        this.prefix = 'Powerful'

        this.isMovement = true;
    }
}
