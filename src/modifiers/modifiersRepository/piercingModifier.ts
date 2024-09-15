import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Modifier } from "../modifier";

export class piercingModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 0.8};
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? 1 : 0}
        this.name = 'Piercing';
        this.namePrefix = 'Piercing';
        this.description = 'When you hit deal damage to Health directly, additionally reduce enemy Armor by the same value. ';
        this.modifierType = Modifier.Type.Improvement;
    }
}
