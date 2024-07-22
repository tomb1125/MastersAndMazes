import { PowerModifier } from "../../core/powerModifier";
import { Utils } from "../../core/utils";
import { Effect } from "../effect";
import { Modifier } from "../modifier";

export class damageBonusEffect extends Effect {
    
    constructor() {
        super();
        
        this.value = Math.ceil(Math.random() * 4) + 1;
        this.duration = Math.ceil(Math.random() * 2 + 0.5);
        this.name = 'Empower'; 
        this.namePrefix = 'Empowering'; 
        this.description = 'Empower - when dealing damage with an Ability deal '+this.value+' bonus damage. This effect lasts for '+this.duration+' turns. ';
        this.subtype = Effect.Subtype.Buff;
        this.elements =  [[Modifier.Element.Physical, Modifier.Element.Lightning, Modifier.Element.Fire, Modifier.Element.Ice, Modifier.Element.Shadow].sort(() => 0.5 - Utils.random())[1]];
        this.powerBonus = (x: PowerModifier) => {return - this.value * Utils.getDurationCoeficient(this.duration)}; 
    }
}
