import { Ability } from "../../core/ability";
import { PowerModifier } from "../../core/powerModifier";
import { Utils } from "../../core/utils";
import { Effect } from "../effect";

export class scalingDotEffect extends Effect {
    
    constructor() {
        super();
        const dotInit: any [] = [[Ability.Element.Physical, 'Bleeding'], [Ability.Element.Fire, 'Burning'], [Ability.Element.Poison, 'Poisoned']].sort(() => 0.5 - Utils.random())[0];
        
        this.value = Math.ceil(Utils.DPS * (Utils.random()));
        this.duration = Math.ceil(Utils.random() * 3) + 1;
        this.powerMultiplier = (x: PowerModifier) => {return 1 / (1 + Utils.getDurationCoeficient(this.duration)) };
        this.elements =  [dotInit[0] as Ability.Element];
        this.name = dotInit[1]+' ?x'+this.duration as string;  
        this.namePrefix = dotInit[1] as string;  
        this.description = this.namePrefix + ' - at the end of each turn target takes damage taken from this power again, lasts for '+this.duration+' turns.';
        this.subtype = Effect.Subtype.Debuff;
    }
}
