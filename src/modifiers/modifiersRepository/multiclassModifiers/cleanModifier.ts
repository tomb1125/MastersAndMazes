import { Ability } from "../../../core/ability.js";
import { AffectsWeight } from "../../../core/affectsWeight.js";
import { CharacterContext } from "../../../core/characterContext.js";
import { Modifier } from "../../modifier.js";

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
        this.modifierType = Modifier.Type.Constraint;
    }
}
