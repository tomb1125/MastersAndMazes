import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Rule } from "../../core/rule";
import { Utils } from "../../core/utils";
import { Modifier } from "../modifier";

export class forcefulModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerBonus = (x: CanAffectModifier) => -3; 
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? Utils.COMMON_MODIFIER : 0}
        this.name = 'Forceful';
        this.namePrefix = 'Forceful';
        this.description = 'When you hit, push target forcefully 5 squares. ';
        this.modifierType = Modifier.Type.Improvement;
        this.longDescription = Utils.getRule(Rule.Name.ForcefulPush).description;
    }
}
