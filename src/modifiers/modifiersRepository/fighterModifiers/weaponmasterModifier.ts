import { Ability } from "../../../core/ability";
import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Utils } from "../../../core/utils";
import { Modifier } from "../../modifier";

export class weaponmasterModifier extends Modifier {
    
constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 0.6; 

        this.weight = (affector) => {
            return affector != undefined && affector.type === Ability.Type.Attack
              ? CharacterContext.classes.includes(CharacterContext.Class.Fighter)
                ? CharacterContext.IN_CLASS_MODIFIER
                : CharacterContext.OUT_OF_CLASS_WEIGHT
              : 0;
          };      
        this.name = 'Weaponmaster';
        this.namePrefix = 'Weaponmasers';
        this.description = 'Repeat this attack for each unique Fighter\'s Stance you\'ve entered this combat, without paying mana cost.';
        this.modifierType = Modifier.Type.Improvement;
    }
}
