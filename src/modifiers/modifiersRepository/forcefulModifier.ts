import { Ability } from "../../core/ability.js";
import { AffectsWeight } from "../../core/affectsWeight.js";
import { CanAffectModifier } from "../../core/canAffectModifier.js";
import { Rule } from "../../core/rule.js";
import { Utils } from "../../core/utils.js";
import { Modifier } from "../modifier.js";

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
