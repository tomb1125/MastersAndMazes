import { Ability } from "../../../core/ability";
import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Utils } from "../../../core/utils";
import { Modifier } from "../../modifier";

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
