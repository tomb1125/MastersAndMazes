import { Ability } from "../../../core/ability";
import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class manaFumeModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerBonus = () => -5; 
        this.weight = (affector) => {
            return affector != undefined && affector.type === Ability.Type.Attack
              ? CharacterContext.classes.includes(CharacterContext.Class.Wizard)
                ? CharacterContext.IN_CLASS_MODIFIER
                : CharacterContext.OUT_OF_CLASS_WEIGHT
              : 0;
          };                
        this.name = 'Mana Fume';
        this.namePrefix = 'Fuming';
        this.description = 'If you\'ve hit and have 4 or less Mana, gain 10 Mana.';
        this.modifierType = Modifier.Type.Improvement;
    }
}
