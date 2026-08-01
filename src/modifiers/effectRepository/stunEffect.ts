import { Ability } from "../../core/ability.js";
import { CharacterContext } from "../../core/characterContext.js";
import { Utils } from "../../core/utils.js";
import { Effect } from "../effect.js";

export class stunEffect extends Effect {
    
    constructor() {
        super();
        
        this.powerBonus = () => {return - 1.5 * Utils.getDPS(1)};
        this.name = 'Stun'; 
        this.namePrefix = 'Stunning'; 
        this.description = 'Stunned - character cannot take actions. Stunned ends at the end of a turn.';
        this.subtype = Effect.Subtype.Debuff;       
    }
}
