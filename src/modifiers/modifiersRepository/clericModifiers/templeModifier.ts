import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class templeModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.6; 
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.name = 'Temple';
        this.namePrefix = 'Temple';
        this.description = 'Can be only used within 10 km of a temple or a relic of your faith.';
        this.longDescription = '';
        this.modifierType = Modifier.Type.Constraint;
    }
}
