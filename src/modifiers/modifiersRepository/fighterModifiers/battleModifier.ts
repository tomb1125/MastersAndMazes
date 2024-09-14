import { Ability } from "../../../core/ability";
import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Utils } from "../../../core/utils";
import { Modifier } from "../../modifier";

export class battleModifier extends Modifier {
    
constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.5; 

        this.weight = (affector) => {
            return affector != undefined && affector.type === Ability.Type.Attack
              ? CharacterContext.classes.includes(CharacterContext.Class.Fighter)
                ? Utils.RARE_MODIFIER * CharacterContext.IN_CLASS_MODIFIER
                : Utils.RARE_MODIFIER * CharacterContext.OUT_OF_CLASS_WEIGHT
              : 0;
          };      
        this.name = 'Battle';
        this.namePrefix = 'Battle';
        this.description = 'Can only be used when you are adjacent to two enemies.';
        this.longDescription = '';
        this.modifierType = Modifier.Type.Constraint;
    }
}
