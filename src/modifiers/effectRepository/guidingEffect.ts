import { Ability } from "../../core/ability";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Utils } from "../../core/utils";
import { Effect } from "../effect";
import { Modifier } from "../modifier";

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
