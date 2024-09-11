import { Ability } from "../../../core/ability";
import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class legendaryWeaponModifier extends Modifier {
    
constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 2.7; 

        this.weight = (affector) => {
            return affector != undefined && affector.type === Ability.Type.Attack
              ? CharacterContext.classes.includes(CharacterContext.Class.Fighter)
                ? CharacterContext.IN_CLASS_MODIFIER
                : CharacterContext.OUT_OF_CLASS_WEIGHT
              : 0;
          };                this.name = 'Legendary';
        this.namePrefix = 'Legendary';
        this.description = 'This attack can be only made with a legendary weapon.';
        this.longDescription = '';
        this.modifierType = Modifier.Type.Constraint;
    }
}
