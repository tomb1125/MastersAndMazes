import { Ability } from "../../../core/ability.js";
import { AffectsWeight } from "../../../core/affectsWeight.js";
import { CharacterContext } from "../../../core/characterContext.js";
import { Utils } from "../../../core/utils.js";
import { Modifier } from "../../modifier.js";

export class battleModifier extends Modifier {
    
constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.5; 

        this.weight = (affector) => {
            return affector != undefined && affector.type === Ability.Type.Attack
              ? CharacterContext.classes.includes(CharacterContext.Class.Fighter)
                ? CharacterContext.IN_CLASS_MODIFIER
                : CharacterContext.OUT_OF_CLASS_WEIGHT
              : 0;
          };      
        this.name = 'Battle';
        this.namePrefix = 'Battle';
        this.description = 'Can only be used when you are adjacent to two enemies.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
