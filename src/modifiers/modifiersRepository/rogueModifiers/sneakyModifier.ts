import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class sneakyModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 2.5; 
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ? CharacterContext.IN_CLASS_MODIFIER : 0.2}
        this.name = 'Sneaky';
        this.namePrefix = 'Sneaky';
        this.description = 'Can be only used when you ended last turn hidden.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
