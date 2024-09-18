import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { Utils } from "../../core/utils";
import { Modifier } from "../modifier";

export class exhaustingModifer extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = (x?: AffectsWeight) => {return x?.cooldown != Ability.Cooldown.Encounter ? 1.75 : 2.5};
        this.weight = (x?: AffectsWeight) => {return x?.cooldown != Ability.Cooldown.Encounter ? 0.3 : Utils.COMMON_MODIFIER}
        this.name = 'Exhausting';
        this.namePrefix = 'Exhausting';
        this.description = 'After you use this ability, reduce your health to 1.';
        this.modifierType =Modifier.Type.Constraint;
    }
}
