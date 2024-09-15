import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Modifier } from "../modifier";

export class forcefulModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerBonus = (x: CanAffectModifier) => -2; 
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? 1 : 0}
        this.name = 'Forceful';
        this.namePrefix = 'Forceful';
        this.description = 'When you hit, push target forcefully 5 squares. ';
        this.modifierType = Modifier.Type.Improvement;
    }
}
