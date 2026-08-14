import { Ability } from "../../../core/ability.js";
import { AffectsWeight } from "../../../core/affectsWeight.js";
import { Modifier } from "../../modifier.js";

export class manaFumeModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerBonus = () => -5; 
        this.weight = (affector) => {
            return affector != undefined && affector.type === Ability.Type.Attack ? 1 : 0;
          };
        this.name = 'Mana Fume';
        this.namePrefix = 'Fuming';
        this.description = 'If you\'ve hit and have 4 or less Mana, gain 10 Mana.';
        this.modifierType = Modifier.Type.Improvement;
    }
}
