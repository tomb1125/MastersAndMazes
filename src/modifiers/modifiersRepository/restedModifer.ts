import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { Modifier } from "../modifier";

export class restedModifer extends Modifier {
    
    constructor() {
        super();
        this.powerMultiplier = () => {return 1.3};
        this.name = 'Rested';
        this.namePrefix = 'Rested';
        this.description = 'Can only be used if you managed to rest well during last night.';
        this.longDescription = 'Camping in front of dungeon or having to keeping watch makes you not well reseted.'
        this.modifierType =Modifier.Type.Constraint;
    }
}
