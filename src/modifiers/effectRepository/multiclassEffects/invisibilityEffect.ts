import { Ability } from "../../../core/ability";
import { CharacterContext } from "../../../core/characterContext";
import { Utils } from "../../../core/utils";
import { Effect } from "../../effect";

export class invisibilityEffect extends Effect {
    
    constructor() {
        super();
        
        this.duration = Math.ceil(Utils.random() * 2 + 0.5);
        this.powerBonus = () => {return - Utils.DPS / 2 * Utils.getDurationCoeficient(this.duration)};
        this.weight = () => {
          return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ||
                 CharacterContext.classes.includes(CharacterContext.Class.Wizard)
              ? CharacterContext.IN_CLASS_MODIFIER
              : CharacterContext.OUT_OF_CLASS_WEIGHT
        };
        this.name = 'Invisibilty '+this.duration ; 
        this.namePrefix = 'Vanishing'; 
        this.description = 'Invisibilty - whenever you move you become untargetable until you attack. This effect lasts '+this.duration+' turns and does not end with attacking.';
        this.subtype = Effect.Subtype.Buff;
      
    }
}
