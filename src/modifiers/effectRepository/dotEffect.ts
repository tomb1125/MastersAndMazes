import { Ability } from "../../core/ability";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Utils } from "../../core/utils";
import { Effect } from "../effect";

export class dotEffect extends Effect {
    
    constructor() {
        super();
        const dotInit: any [] = [[Ability.Element.Physical, 'Bleeding'], [Ability.Element.Fire, 'Burning'], [Ability.Element.Poison, 'Poisoned']].sort(() => 0.5 - Utils.random())[0];
        
        this.value = Math.ceil(Utils.DPS * (Utils.random()));
        this.duration = Math.ceil(Utils.random() * 3 + 1) + 1;
        this.powerBonus = (x: CanAffectModifier) => {return - this.value * Utils.getDurationCoeficient(this.duration) };
        this.elements =  [dotInit[0] as Ability.Element];
        this.name = dotInit[1]+' '+this.value+'x'+this.duration as string;  
        this.namePrefix = dotInit[1] as string;  
        this.description = this.namePrefix + ' - at the end of each turn target takes '+this.value+' damage, lasts for '+this.duration+' turns.';
        this.subtype = Effect.Subtype.Debuff;
    }
}
