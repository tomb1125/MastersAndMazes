import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { Modifier } from "../modifier";

export class exhaustingModifer extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 2.5};
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Utility ? 0.5 : 1}
        this.name = 'Exhausting';
        this.namePrefix = 'Exhausting';
        this.description = 'When you hit or miss with this action, reduce your health to 1.';
        this.modifierType =Modifier.Type.Constraint;
    }
}
