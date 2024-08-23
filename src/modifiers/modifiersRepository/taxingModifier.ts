import { Modifier } from "../modifier";

export class taxingModifier extends Modifier {
    
    constructor() {
        super();
        this.powerMultiplier = () => {return 1.2};
        this.name = 'Taxing';
        this.namePrefix = 'Taxing';
        this.description = 'When you add this ability to your character gain 2 Scars (each Scar brings character slightly closer to death, see rules for more).';
        this.modifierType = Modifier.Type.Constraint;
    }
}
