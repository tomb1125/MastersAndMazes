import { Ability } from "../../core/ability";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Utils } from "../../core/utils";
import { Effect } from "../effect";
import { Modifier } from "../modifier";

export class vulnerableEffect extends Effect {
    
    constructor() {
        super();
        
        this.value = Math.ceil(Utils.random() * 4) + 1;
        this.name = 'Vulnerable ' + this.value; 
        this.namePrefix = 'Vulnerability'; 
        this.description = 'Vulnerable '+this.value+' - when taking damage from an Ability deal +'+this.value+' bonus damage. This effect lasts for 1 turns. ';
        this.subtype = Effect.Subtype.Debuff;
        this.powerBonus = (x: CanAffectModifier) => {return - 0.5 * this.value * Utils.AVG_PLAYERS * 0.8}; 
    }
}
