import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class pristineModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.4; 
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : 0.3}
        this.name = 'Pristine';
        this.namePrefix = 'Pristine';
        this.description = 'Can be only used when you are undamaged.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
