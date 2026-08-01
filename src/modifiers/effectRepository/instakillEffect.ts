import { Ability } from "../../core/ability.js";
import { Utils } from "../../core/utils.js";
import { Effect } from "../effect.js";

export class instakillEffect extends Effect {
    
    constructor() {
        super();
        
        this.powerBonus = () => {return -1000};
        this.weight = () => {return Utils.RARE_MODIFIER}; 
        this.name = 'Instakill'; 
        this.namePrefix = 'Instakill'; 
        this.description = 'Instakill - if applied successfully, target dies.';
        this.subtype = Effect.Subtype.Debuff;
      
    }
}
