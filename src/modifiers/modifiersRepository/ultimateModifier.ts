import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { Utils } from "../../core/utils";
import { Modifier } from "../modifier";

export class ultimateModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 2.5};
        this.weight = (x?: AffectsWeight) => {return x?.cooldown === Ability.Cooldown.Encounter ? Utils.COMMON_MODIFIER : 0}
        this.name = 'Ultimate';
        this.namePrefix = 'Ultimate'; //numeric component
        this.description = 'Can be used only on turn 8 or later.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
