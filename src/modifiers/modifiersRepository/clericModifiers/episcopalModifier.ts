import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Utils } from "../../../core/utils";
import { Modifier } from "../../modifier";

export class episcopalModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 2.7; 
        this.weight = () => {return Utils.RARE_MODIFIER * (CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT)}
        this.name = 'Episcopal';
        this.namePrefix = 'Episcopal';
        this.description = 'Can be only used if you are a Bishop or you were personally blessed by a pope.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
