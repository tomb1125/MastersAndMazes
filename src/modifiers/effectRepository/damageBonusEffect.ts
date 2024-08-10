import { Ability } from "../../core/ability";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Utils } from "../../core/utils";
import { Effect } from "../effect";
import { Modifier } from "../modifier";

export class damageBonusEffect extends Effect {
    
    constructor() {
        super();
        
        this.value = Math.ceil(Utils.random() * 4) + 1;
        this.duration = Math.ceil(Utils.random() * 2 + 0.5);
        this.name = 'Empower ' + this.value +'x' +this.duration; 
        this.namePrefix = 'Empowering'; 
        this.description = 'Empower '+this.value+' - when dealing damage with an Ability deal +'+this.value+' bonus damage. This effect lasts for '+this.duration+' turns. ';
        this.subtype = Effect.Subtype.Buff;
        this.elements =  [[Ability.Element.Physical, Ability.Element.Lightning, Ability.Element.Fire, Ability.Element.Ice, Ability.Element.Dark].sort(() => 0.5 - Utils.random())[1]];
        this.powerBonus = (x: CanAffectModifier) => {return - 0.5 * this.value * Utils.getDurationCoeficient(this.duration)}; 
    }
}
