import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class armoredModifier extends Modifier {
    
constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.25; 
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Fighter) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.name = 'Armored';
        this.namePrefix = 'Armored';
        this.description = 'Can only used while you have Armor Points.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
