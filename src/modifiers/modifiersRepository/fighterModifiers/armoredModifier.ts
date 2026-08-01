import { Ability } from "../../../core/ability.js";
import { AffectsWeight } from "../../../core/affectsWeight.js";
import { CharacterContext } from "../../../core/characterContext.js";
import { Modifier } from "../../modifier.js";

export class armoredModifier extends Modifier {
    
constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.25; 

        this.weight = (affector) => {
            return affector != undefined && affector.type === Ability.Type.Attack
              ? CharacterContext.classes.includes(CharacterContext.Class.Fighter)
                ? CharacterContext.IN_CLASS_MODIFIER
                : CharacterContext.OUT_OF_CLASS_WEIGHT
              : 0;
          };              
        this.name = 'Armored';
        this.namePrefix = 'Armored';
        this.description = 'Can only used while you have Armor Points.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
