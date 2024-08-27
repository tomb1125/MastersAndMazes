import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class HolyHealUtility extends Utility {

    constructor() {
        super('Holy Heal');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}

        this.cooldown = Ability.Cooldown.Encounter;
        this.chance = 0.9
        this.description = 'Using Standard Action, restore 10 health to yourself and one ally within 5 squares.';
        this.compensate();
    }
}