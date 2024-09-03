import { AffectsWeight } from "../../core/affectsWeight";
import { Modifier } from "../modifier";

export class grazedModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 1.2};
        this.name = 'Grazed';
        this.namePrefix = 'Grazed';
        this.description = 'When you add this ability to your character gain 2 Scars (each Scar brings character slightly closer to death, see rules for more).';
        this.modifierType = Modifier.Type.Constraint;
    }
}
