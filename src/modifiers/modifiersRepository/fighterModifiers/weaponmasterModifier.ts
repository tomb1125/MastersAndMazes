import { Ability } from "../../../core/ability.js";
import { AffectsWeight } from "../../../core/affectsWeight.js";
import { CharacterContext } from "../../../core/characterContext.js";
import { Utils } from "../../../core/utils.js";
import { Modifier } from "../../modifier.js";

export class weaponmasterModifier extends Modifier {
    
constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 0.5; 

        this.weight = (affector) => {
            return affector != undefined && affector.type === Ability.Type.Attack
              ? CharacterContext.classes.includes(CharacterContext.Class.Fighter)
                ? CharacterContext.IN_CLASS_MODIFIER
                : 0
              : 0;
          };      
        this.name = 'Weaponmaster';
        this.namePrefix = 'Weaponmasters';
        this.description = 'Repeat this attack for each unique Fighter\'s Stance you\'ve entered this combat, without paying mana cost.';
        this.modifierType = Modifier.Type.Improvement;
    }
}
