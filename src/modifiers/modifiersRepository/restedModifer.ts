import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { Utils } from "../../core/utils";
import { Modifier } from "../modifier";

export class restedModifer extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 1.3};
        this.weight = () => Utils.COMMON_MODIFIER;
        this.name = 'Rested';
        this.namePrefix = 'Rested';
        this.description = 'Can only be used if you managed to rest well during last night.';
        this.longDescription = 'Camping in front of dungeon or having to keeping watch makes you not well reseted. Being well rested is usually only achieved by spending last night in room in a city.'
        this.modifierType =Modifier.Type.Constraint;
    }
}
