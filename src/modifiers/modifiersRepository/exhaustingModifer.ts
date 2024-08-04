import { Modifier } from "../modifier";

export class exhaustingModifer extends Modifier {
    
    constructor() {
        super();
        this.powerMultiplier = () => {return 2.5};
        this.name = 'Exhausting';
        this.namePrefix = 'Exhausting';
        this.description = 'When you hit or miss with this action, reduce your health to 1.';
        this.modifierType =Modifier.Type.Constraint;
    }
}
