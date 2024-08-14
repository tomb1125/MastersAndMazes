import { DescriptiveNumberFactory } from "../../components/descriptiveNumberFactory";
import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { CanAffectModifier } from "../../core/canAffectModifier";
import { Modifier } from "../modifier";

export class lifestealModifier extends Modifier {
    
    constructor() {
        super();
        this.modifierType =Modifier.Type.Improvement;
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? 1 : 0}
        this.name = 'Lifesteal'; 
        this.namePrefix = 'Leeching'; 
        this.description = 'When you hit, heal yourself equal to damage taken by enemy.';
        this.powerMultiplier = (x: CanAffectModifier) => {return 0.55}; //TODO this should be bonus equal to damage... however damage is set after modifiers...s
        this.longDescription = '';
    }
}
