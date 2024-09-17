import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { Utils } from "../../core/utils";
import { Modifier } from "../modifier";

export class bloodiedModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 1.5};
        this.weight = (x?: AffectsWeight) => {return x?.cooldown === Ability.Cooldown.Encounter ?  Utils.COMMON_MODIFIER : Utils.RARE_MODIFIER}
        this.name = 'Bloody';
        this.namePrefix = 'Bloody';
        this.description = 'Can be used only when you have half or less Health.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
