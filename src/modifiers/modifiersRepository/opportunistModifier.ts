import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { Modifier } from "../modifier";

export class opportunistModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 1.4};
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? 1 : 0} 
        this.name = 'Opportunist'
        this.namePrefix = 'Opportunists';
        this.description = 'Can only be used against enemies that rolled 90-00 on D100 during their last turn. ';
        this.longDescription = '';
        this.modifierType =Modifier.Type.Constraint;
    }
}
