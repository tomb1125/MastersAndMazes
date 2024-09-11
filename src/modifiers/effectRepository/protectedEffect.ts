import { CanAffectModifier } from "../../core/canAffectModifier";
import { Utils } from "../../core/utils";
import { Effect } from "../effect";

export class protectedEffect extends Effect {
    
    constructor() {
        super();
        
        this.value = Math.ceil(Utils.DPS * (Utils.random()));
        this.duration = Math.ceil(Utils.random() * 3) + 1;
        this.weight = () => {return 1};
        this.powerBonus = (x: CanAffectModifier) => {return - Utils.ENEMY_DPS * 5/10 * Utils.getDurationCoeficient(this.duration)}; 
        this.name = 'Protection '+this.duration;  
        this.namePrefix = 'Protecting';  
        this.description = this.namePrefix + ' - whenever you take damage and/or are affected by an enemy, roll D10, on 8-0 you ignore this damage/effect. This lasts for '+this.duration+' turns.';
        this.subtype = Effect.Subtype.Buff;
    }
}
