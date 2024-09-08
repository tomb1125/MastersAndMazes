import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class breachingModifier extends Modifier {
    
constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 2; 
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Fighter) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.name = 'Breaching';
        this.namePrefix = 'Breaching';
        this.description = 'Can only be used in a room you\'ve kicked the door down to enter.';
        this.longDescription = '';
        this.modifierType = Modifier.Type.Constraint;
    }
}
