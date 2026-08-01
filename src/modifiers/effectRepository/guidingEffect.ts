import { Ability } from "../../core/ability.js";
import { CanAffectModifier } from "../../core/canAffectModifier.js";
import { Utils } from "../../core/utils.js";
import { Effect } from "../effect.js";
import { Modifier } from "../modifier.js";

export class guidingEffect extends Effect {
    
    constructor() {
        super();
        
        this.value = Math.ceil(Utils.random() * 2.2);
        this.duration = Math.ceil(Utils.random() * 2 + 0.5);
        this.name = 'Guide '+this.value+'x'+this.duration; 
        this.namePrefix = 'Guiding'; 
        this.description = 'Guide - when rolling for an Ability chance gain '+this.value+' Boon. This effect lasts for '+this.duration+' turns. ';
        this.subtype = Effect.Subtype.Buff;
        this.powerBonus = (x: CanAffectModifier) => {return - Utils.BoonValue * (1 - Math.pow(5/6, this.value)) * Utils.getDurationCoeficient(this.duration)}; 

    }
}
