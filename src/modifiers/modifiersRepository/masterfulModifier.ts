import { Ability } from "../../core/ability.js";
import { AffectsWeight } from "../../core/affectsWeight.js";
import { Utils } from "../../core/utils.js";
import { Modifier } from "../modifier.js";

export class masterfulModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => {return 1.6};
        this.weight = (x?: AffectsWeight) => {return x?.cooldown === Ability.Cooldown.Encounter ? Utils.COMMON_MODIFIER : 0} 
        this.name = 'Masterful'
        this.namePrefix = 'Masterful';
        this.description = 'Can only be used when you rolled 01-20 on your first D100 roll last turn. ';
        this.modifierType = Modifier.Type.Constraint;
    }
}
