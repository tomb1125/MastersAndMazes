import { Modifier } from "../modifier";

export class bloodiedModifier extends Modifier {
    
    constructor() {
        super();
        this.powerMultiplier = () => {return 1.5};
        this.name = 'Bloody';
        this.namePrefix = 'Bloody';
        this.description = 'Can be used only when you have half or less Health.';
        this.longDescription = '';
        this.type = Modifier.Type.Constraint;
    }
}
