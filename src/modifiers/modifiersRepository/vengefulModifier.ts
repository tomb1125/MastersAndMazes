import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Modifier } from "../modifier";

export class vengefulModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = (x: CanAffectModifier) => 1.3; 
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? 1 : 0}
        this.name = 'Vengeance';
        this.namePrefix = 'Vengeful';
        this.description = 'Can be only used against enemy which attacked, damaged or affected you last turn. ';
        this.longDescription = '';
        this.modifierType = Modifier.Type.Constraint;
    }
}
