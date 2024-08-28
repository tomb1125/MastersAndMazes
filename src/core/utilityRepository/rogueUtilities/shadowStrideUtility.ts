import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class shadowStrideUtility extends Utility {

    constructor() {
        super('Shadow Stride');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}

        this.cooldown = Ability.Cooldown.Daily;
        this.chance = 0.9
        this.description = 'You move about ';
        this.compensate();
    }
}