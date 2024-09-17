import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { Utils } from "../../core/utils";
import { Modifier } from "../modifier";

export class signatureModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 1.2};
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? Utils.COMMON_MODIFIER : 0}
        this.name = 'Signature';
        this.namePrefix = 'Signature';
        this.description = 'This is a Signature Ability - First Signature Ability you use each combat gains 1 Boon for its chance and +2 damage, before rolling.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
