import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class tumbleUtility extends Utility {

    constructor() {
        super('Tumble');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}

        this.cooldown = Ability.Cooldown.Encounter;
        this.chance = 0.35
        this.description = 'As a reaction, when you are attacked, you can move away 5 meters in straight line. If you can complete this movement, you fully dodge the attack. ';
        this.compensate();
    }
}