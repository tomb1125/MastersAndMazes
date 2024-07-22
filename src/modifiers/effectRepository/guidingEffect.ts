import { PowerModifier } from "../../core/powerModifier";
import { Utils } from "../../core/utils";
import { Effect } from "../effect";
import { Modifier } from "../modifier";

export class guidingEffect extends Effect {
    
    constructor() {
        super();
        
        this.value = Math.ceil(Math.random() * 2.2);
        this.duration = Math.ceil(Math.random() * 2 + 0.5);
        this.name = 'Guide'; 
        this.namePrefix = 'Guiding'; 
        this.description = 'Guide - when rolling for an Ability chance gain '+this.value+' Boon. This effect lasts for '+this.duration+' turns. ';
        this.subtype = Effect.Subtype.Buff;
        this.elements =  [[Modifier.Element.Holy, Modifier.Element.Psychic].sort(() => 0.5 - Utils.random())[1]];
        this.powerBonus = (x: PowerModifier) => {return - Utils.BoonValue * (1 - Math.pow(5/6, this.value)) * Utils.getDurationCoeficient(this.duration)}; 

    }
}
