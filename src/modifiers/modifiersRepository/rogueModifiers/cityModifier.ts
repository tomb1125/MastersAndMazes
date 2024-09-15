import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class cityModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.8; 
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ? CharacterContext.IN_CLASS_MODIFIER : 0.2}
        this.name = 'City';
        this.namePrefix = 'City';
        this.description = 'Can be only used within walls of a city.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
