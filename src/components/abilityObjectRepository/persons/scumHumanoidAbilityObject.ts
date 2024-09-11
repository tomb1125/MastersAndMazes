import { AbilityObject } from "../../abilityObject";

export class scumHumanoidAbilityObject extends AbilityObject {
    
    constructor() {
        super('Scum');        
        this.description = 'any citizen, peasant, thief or someone of lower standing';
        this.rarity = 0.7;
        this.prefix = 'Lowly'

        this.isPerson = true;
    }
}
