import { PowerModifier } from "../../core/powerModifier";
import { Utils } from "../../core/utils";
import { Effect } from "../effect";
import { Modifier } from "../modifier";

export class dotEffect extends Effect {
    
    constructor() {
        super();
        const dotInit: any [] = [[Modifier.Element.Physical, 'Bleeding'], [Modifier.Element.Fire, 'Burning'], [Modifier.Element.Curse, 'Diseased']].sort(() => 0.5 - Utils.random())[0];
        
        this.value = Math.ceil(Utils.DPS * (Math.random()));
        this.duration = Math.ceil(Math.random() * 3) + 1;
        this.powerBonus = (x: PowerModifier) => {return - this.value * Utils.getDurationCoeficient(this.duration) }; //this means stun is worth regular DPS damage
        this.elements =  [dotInit[0] as Modifier.Element];
        this.name = dotInit[1] as string;  
        this.namePrefix = dotInit[1] as string;  
        this.description = this.namePrefix + ' - at the end of each turn take '+this.value+' damage, lasts for '+this.duration+' turns.';
        this.subtype = Effect.Subtype.Debuff;
    }
}
