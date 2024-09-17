import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Utils } from "../../core/utils";
import { Modifier } from "../modifier";

export class instinctiveModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = (x: CanAffectModifier) => 0.9; 
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? Utils.COMMON_MODIFIER : 0}
        this.name = 'Instinct';
        this.namePrefix = 'Instinctive';
        this.description = 'If you are stunned, you can use this ability as a swift action. You can ignore Banes when rolling for this ability. ';
        this.modifierType = Modifier.Type.Improvement;
    }
}
