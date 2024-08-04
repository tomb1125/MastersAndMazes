import { Modifier } from "../modifier";

export class ultimateModifier extends Modifier {
    
    constructor() {
        super();
        this.powerMultiplier = () => {return 2.5};
        this.name = 'Ultimate';
        this.namePrefix = 'Ultimate'; //numeric component
        this.description = 'Can be used only on turn 8 or later.';
        this.longDescription = '';
        this.modifierType =Modifier.Type.Constraint;
    }
}
