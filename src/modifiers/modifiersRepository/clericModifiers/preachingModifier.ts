import { Ability } from "../../../core/ability";
import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class preachingModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.5; 

        this.weight = (affector) => {
            return affector != undefined && affector?.cooldown != Ability.Cooldown.Encounter
              ? CharacterContext.classes.includes(CharacterContext.Class.Cleric)
                ? CharacterContext.IN_CLASS_MODIFIER
                : CharacterContext.OUT_OF_CLASS_WEIGHT
              : 0;
          };        
        this.name = 'Sermon';
        this.namePrefix = 'Preaching';
        this.description = 'This ability can be only used as you complete a sermon in front of at least 10 people.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
