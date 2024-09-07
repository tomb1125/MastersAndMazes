import { Ability } from "../../../core/ability";
import { CharacterContext } from "../../../core/characterContext";
import { Utils } from "../../../core/utils";
import { Effect } from "../../effect";

export class retributionEffect extends Effect {
    
    constructor() {
        super();
        
        this.duration = Math.ceil(Utils.random() * 2 + 0.5);
        this.powerBonus = () => {return - Utils.ENEMY_DPS * 0.9 * Utils.getDurationCoeficient(this.duration)};
        this.weight = () => {
          return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ||
                 CharacterContext.classes.includes(CharacterContext.Class.Paladin)
              ? CharacterContext.IN_CLASS_MODIFIER
              : CharacterContext.OUT_OF_CLASS_WEIGHT
        };
        this.name = 'Retribution '+this.duration ; 
        this.namePrefix = 'Retributive'; 
        this.description = 'Retribution - whenever you are dealt damage, the source of the damage immidietly takes the same amount of damage ignoring its resistances. This effect lasts '+this.duration+' turns.';
        this.subtype = Effect.Subtype.Buff;

      
    }
}
