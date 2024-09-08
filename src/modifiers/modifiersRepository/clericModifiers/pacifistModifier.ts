import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class pacifistModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.7; 
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.name = 'Pacifist';
        this.namePrefix = 'Pacifists';
        this.description = 'This ability has a Bane for each creature you reduced to 0 HP today.';
        this.longDescription = '';
        this.modifierType = Modifier.Type.Constraint;
    }
}
