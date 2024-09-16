import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { Modifier } from "../modifier";

export class fullActionModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerBonus = () => {return 2};
        this.weight = (x?: AffectsWeight) => {return x?.cooldown === Ability.Cooldown.Encounter ? 0.75 : 0}
        this.name = 'Full Action';
        this.namePrefix = 'Stationary';
        this.description = 'You must additionally use Move Action to use this power.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
