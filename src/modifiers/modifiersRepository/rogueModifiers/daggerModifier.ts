import { Ability } from "../../../core/ability";
import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class daggerModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.3; 

        this.weight = (affector) => {
            return affector != undefined && affector.type === Ability.Type.Attack
              ? CharacterContext.classes.includes(CharacterContext.Class.Rogue)
                ? CharacterContext.IN_CLASS_MODIFIER
                : CharacterContext.OUT_OF_CLASS_WEIGHT
              : 0;
          };        
        this.name = 'Dagger';
        this.namePrefix = 'Stabbing';
        this.description = 'This ability can be only used when you are wielding a dagger.';
        this.longDescription = '';
        this.modifierType = Modifier.Type.Constraint;
    }
}
