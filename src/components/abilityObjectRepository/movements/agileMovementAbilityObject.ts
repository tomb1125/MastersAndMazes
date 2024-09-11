import { AbilityObject } from "../../abilityObject";

export class agileMovementAbilityObject extends AbilityObject {
    
    constructor() {
        super('Agile Movement');        
        this.description = 'As part of this movement you can jump and climb on any surface. ';
        this.rarity = 1.2;
        this.weight = () => {return 1};
        this.prefix = 'Straigth'

        this.isMovement = true;
    }
}
