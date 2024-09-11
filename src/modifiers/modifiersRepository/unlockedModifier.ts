import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { Modifier } from "../modifier";

export class unlockedModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 1.65};
        this.weight = (x?: AffectsWeight) => {return x?.cooldown === Ability.Cooldown.Encounter ? 1 : 0} 
        this.name = 'Unlock'
        this.namePrefix = 'Unlocked';
        this.description = 'Can only be used when you roll 01-20 on your first D100 roll last turn. ';
        this.longDescription = '';
        this.modifierType = Modifier.Type.Constraint;
    }
}
