import { AffectsWeight } from "../../core/affectsWeight";
import { Utils } from "../../core/utils";
import { Modifier } from "../modifier";

export class nightlyModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 1.35};
        this.weight = () => Utils.COMMON_MODIFIER;
        this.name = 'Nightly';
        this.namePrefix = 'Nightly';
        this.description = 'Can be used only in the night.';
        this.longDescription = 'Can be also used on planes without sun.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
