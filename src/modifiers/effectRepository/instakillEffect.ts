import { Ability } from "../../core/ability";
import { Utils } from "../../core/utils";
import { Effect } from "../effect";

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
