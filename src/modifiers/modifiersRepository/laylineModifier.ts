import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Modifier } from "../modifier";

export class laylineModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = (x: CanAffectModifier) => {return x.range ? Math.max(1.2, 2.1 - x.range/20) : 1}; 1.7; 
        this.weight = (x?: AffectsWeight) => {return x?.cooldown === Ability.Cooldown.Encounter ? 1 : 0}
        this.name = 'Layline';
        this.namePrefix = 'Layline';
        this.description = 'Can be used only while adjacent to place of power (usually you can detect 2-4 places of power each encounter).';
        this.modifierType =Modifier.Type.Constraint;
    }
}
