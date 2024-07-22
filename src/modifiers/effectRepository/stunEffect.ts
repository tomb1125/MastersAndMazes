import { CharacterContext } from "../../core/characterContext";
import { Utils } from "../../core/utils";
import { Effect } from "../effect";
import { Modifier } from "../modifier";

export class stunEffect extends Effect {
    
    constructor() {
        super();
        
        this.powerBonus = () => {return - 1.5 * CharacterContext.getDPS()};
        this.name = 'Stun'; 
        this.weight = 1;
        this.namePrefix = 'Stunning'; 
        this.description = 'Stunned - character cannot take actions. Stunned ends at the end of a turn.';
        this.subtype = Effect.Subtype.Debuff;
        this.elements =  [[Modifier.Element.Physical, Modifier.Element.Ice].sort(() => 0.5 - Utils.random())[1]];
       
    }
}
