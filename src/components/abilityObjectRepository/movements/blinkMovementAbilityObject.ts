import { AbilityObject } from "../../abilityObject";

export class blinkMovementAbilityObject extends AbilityObject {
    
    constructor() {
        super('Blink Movement');        
        this.description = 'Instead of moving you can teleport directly to destination. ';
        this.rarity = 1.3;
        this.weight = () => {return 1};
        this.prefix = 'Blink'

        this.isMovement = true;
    }
}
