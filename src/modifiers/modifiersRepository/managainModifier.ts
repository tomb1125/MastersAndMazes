import { DescriptiveNumberFactory } from "../../components/descriptiveNumberFactory";
import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Modifier } from "../modifier";

export class managainModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.modifierType =Modifier.Type.Improvement;
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? 1 : 0}
        this.name = 'Mana Gain'; 
        this.namePrefix = 'Mana Leeching'; 
        this.description = 'When you hit, gain mana equal to damage taken by enemy.';
        this.powerMultiplier = (x: CanAffectModifier) => {return 0.75};
    }
}
