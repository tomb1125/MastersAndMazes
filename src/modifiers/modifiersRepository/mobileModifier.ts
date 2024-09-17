import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { Utils } from "../../core/utils";
import { Modifier } from "../modifier";

export class mobileModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerBonus = () => {return -2};
        this.weight = (x?: AffectsWeight) => {return x?.cooldown === Ability.Cooldown.Encounter ? 0.75 * Utils.COMMON_MODIFIER : 0}
        this.name = 'Mobile';
        this.namePrefix = 'Mobile';
        this.description = 'Before you use this ability you may move 5 squares.';
        this.modifierType = Modifier.Type.Improvement;
    }
}
