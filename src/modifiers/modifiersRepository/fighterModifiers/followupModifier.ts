import { Ability } from "../../../core/ability.js";
import { AffectsWeight } from "../../../core/affectsWeight.js";
import { CharacterContext } from "../../../core/characterContext.js";
import { Utils } from "../../../core/utils.js";
import { Modifier } from "../../modifier.js";

export class followupModifier extends Modifier {
    
constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 0.75; 

        this.weight = (affector) => {
            return affector != undefined && affector.type === Ability.Type.Attack
              ? CharacterContext.classes.includes(CharacterContext.Class.Fighter)
                ? CharacterContext.IN_CLASS_MODIFIER
                : CharacterContext.OUT_OF_CLASS_WEIGHT
              : 0;
          };      
        this.name = 'Followup';
        this.namePrefix = 'Followup';
        this.description = 'If the target wasn\'t bloodied as you made this attack and became bloodied after hit, you can repeat this attack against this target.';
        this.modifierType = Modifier.Type.Improvement;
    }
}
