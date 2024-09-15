import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { Modifier } from "../modifier";

export class cleaveModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 0.5};
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? 1 : 0}
        this.name = 'Cleave'
        this.namePrefix = 'Cleaving'; //TODO cleave could scale
        this.description = 'After this action, repeat this action 1 time, without paying mana cost. With this repeated action you must target creature adjacent to you or last target.';
        this.modifierType =Modifier.Type.Improvement;

    }
}
