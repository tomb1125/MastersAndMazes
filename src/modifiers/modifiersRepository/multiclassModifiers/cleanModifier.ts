import { Ability } from "../../../core/ability";
import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class cleanModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.2; 
        this.weight = (affector) => {
          return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ||
                 CharacterContext.classes.includes(CharacterContext.Class.Wizard)
              ? CharacterContext.IN_CLASS_MODIFIER
              : CharacterContext.OUT_OF_CLASS_WEIGHT
        };
        this.name = 'Clean';
        this.namePrefix = 'Clean';
        this.description = 'Can be only used if your clothes are clean and you are not wet.';
        this.longDescription = '';
        this.modifierType = Modifier.Type.Constraint;
    }
}
