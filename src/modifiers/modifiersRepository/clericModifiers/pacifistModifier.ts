import { AffectsWeight } from "../../../core/affectsWeight.js";
import { CharacterContext } from "../../../core/characterContext.js";
import { Modifier } from "../../modifier.js";

export class pacifistModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.7; 
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.name = 'Pacifist';
        this.namePrefix = 'Pacifists';
        this.description = 'This ability has a Bane for each creature you reduced to 0 HP today.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
