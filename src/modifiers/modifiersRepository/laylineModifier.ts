import { CanAffectModifier } from "../../core/canAffectModifier";
import { Modifier } from "../modifier";

export class laylineModifier extends Modifier {
    
    constructor() {
        super();
        this.powerMultiplier = (x: CanAffectModifier) => {return x.range ? Math.max(1.1, 2.4 - x.range/10) : 1}; 1.7; 
        this.name = 'Layline';
        this.namePrefix = 'Layline';
        this.description = 'Can be used only while adjacent to place of power.';
        this.longDescription = '';
        this.modifierType =Modifier.Type.Constraint;
    }
}
