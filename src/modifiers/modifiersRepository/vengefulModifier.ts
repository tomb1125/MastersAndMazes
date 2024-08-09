import { PowerModifier } from "../../core/powerModifier";
import { Modifier } from "../modifier";

export class vengefulModifier extends Modifier {
    
    constructor() {
        super();
        this.powerMultiplier = (x: PowerModifier) => 1.3; 
        this.name = 'Vengeance';
        this.namePrefix = 'Vengeful';
        this.description = 'Can be only used against enemy which attacked, damaged or affected you last turn. ';
        this.longDescription = '';
        this.modifierType =Modifier.Type.Constraint;
    }
}
