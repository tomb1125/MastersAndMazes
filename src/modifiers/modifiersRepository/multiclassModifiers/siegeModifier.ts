import { Ability } from "../../../core/ability";
import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class siegeModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.6; 
        this.weight = (affector) => {
          return affector != undefined && affector.type === Ability.Type.Attack
            ? CharacterContext.classes.includes(CharacterContext.Class.Wizard) ||
              CharacterContext.classes.includes(CharacterContext.Class.Ranger)
              ? CharacterContext.IN_CLASS_MODIFIER
              : CharacterContext.OUT_OF_CLASS_WEIGHT
            : 0;
        };
        this.name = 'Siege';
        this.namePrefix = 'Siege';
        this.description = 'Can be only if you are 10 or more squares away from target.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
