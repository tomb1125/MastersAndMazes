import { CanAffectModifier } from "../../core/canAffectModifier.js";
import { Utils } from "../../core/utils.js";
import { Effect } from "../effect.js";

export class exposeEffect extends Effect {
    
    constructor() {
        super();
        
        this.value = Math.ceil(Utils.random() * 2.2);
        this.name = 'Expose '+this.value; 
        this.namePrefix = 'Exposing'; 
        this.description = 'Exposed - when rolling for an ability targeting this creature, any attacker gains '+this.value+' Boons. This effect lasts until end of your next turn. ';
        this.subtype = Effect.Subtype.Debuff;
        this.powerBonus = (x: CanAffectModifier) => {return - Utils.BoonValue * (1 - Math.pow(5/6, this.value)) * Utils.AVG_PLAYERS * 0.8 }; 

    }
}
