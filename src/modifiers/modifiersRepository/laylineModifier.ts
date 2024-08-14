import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Modifier } from "../modifier";

export class laylineModifier extends Modifier {
    
    constructor() {
        super();
        this.powerMultiplier = (x: CanAffectModifier) => {return x.range ? Math.max(1.1, 2.4 - x.range/10) : 1}; 1.7; 
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? 1 : 0}
        this.name = 'Layline';
        this.namePrefix = 'Layline';
        this.description = 'Can be used only while adjacent to place of power (usually you can detect 2-3 places of power each combat).';
        this.longDescription = '';
        this.modifierType =Modifier.Type.Constraint;
    }
}
