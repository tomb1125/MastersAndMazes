import { Ability } from "../../core/ability";
import { PowerModifier } from "../../core/powerModifier";
import { Utils } from "../../core/utils";
import { Effect } from "../effect";
import { Modifier } from "../modifier";

export class damageBonusEffect extends Effect {
    
    constructor() {
        super();
        
        this.value = Math.ceil(Math.random() * 4) + 1;
        this.duration = Math.ceil(Math.random() * 2 + 0.5);
        this.name = 'Empower ' + this.value; 
        this.namePrefix = 'Empowering'; 
        this.description = 'Empower '+this.value+' - when dealing damage with an Ability deal +'+this.value+' bonus damage. This effect lasts for '+this.duration+' turns. ';
        this.subtype = Effect.Subtype.Buff;
        this.elements =  [[Ability.Element.Physical, Ability.Element.Lightning, Ability.Element.Fire, Ability.Element.Ice, Ability.Element.Dark].sort(() => 0.5 - Utils.random())[1]];
        this.powerBonus = (x: PowerModifier) => {return - this.value * Utils.getDurationCoeficient(this.duration)}; 
    }
}
