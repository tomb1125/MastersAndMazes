import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class pristineModifier extends Modifier {
    
    constructor() {
        super();
        this.powerMultiplier = () => 1.5; 
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? 1 : 0.3}
        this.name = 'Pristine';
        this.namePrefix = 'Pristine';
        this.description = 'Can be only used when you are undamaged.';
        this.longDescription = '';
        this.modifierType = Modifier.Type.Constraint;
    }
}
