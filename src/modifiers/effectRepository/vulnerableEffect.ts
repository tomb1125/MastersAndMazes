import { Ability } from "../../core/ability.js";
import { CanAffectModifier } from "../../core/canAffectModifier.js";
import { Utils } from "../../core/utils.js";
import { Effect } from "../effect.js";
import { Modifier } from "../modifier.js";

export class vulnerableEffect extends Effect {
    
    constructor() {
        super();
        
        this.value = Math.ceil(Utils.random() * 4) + 1;
        this.name = 'Vulnerable ' + this.value; 
        this.namePrefix = 'Debilitating'; 
        this.description = 'Vulnerable '+this.value+' - when taking damage from an Ability take +'+this.value+' bonus damage. This effect lasts for 1 turns. ';
        this.subtype = Effect.Subtype.Debuff;
        this.powerBonus = (x: CanAffectModifier) => {return - 0.5 * this.value * Utils.AVG_PLAYERS * 0.8}; 
    }
}
