import { Modifier } from "../modifier";

export class nightlyModifier extends Modifier {
    
    constructor() {
        super();
        this.powerMultiplier = () => {return 1.35};
        this.name = 'Nightly';
        this.namePrefix = 'Nightly';
        this.description = 'Can be used only in the night.';
        this.longDescription = 'Can be also used on planes without sun.';
        this.type = Modifier.Type.Constraint;
    }
}
