import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class pacifistModifier extends Modifier {
    
    constructor() {
        super();
        this.powerMultiplier = () => 2; 
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.name = 'Pacifist';
        this.namePrefix = 'Pacifists';
        this.description = 'Can be only used if you did not reduce any creature to 0 HP this day.';
        this.longDescription = '';
        this.modifierType = Modifier.Type.Constraint;
    }
}
