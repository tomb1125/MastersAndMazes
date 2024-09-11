import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class greedyModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.2; 
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.name = 'Greedy';
        this.namePrefix = 'Greedy';
        this.description = 'Can be only used when this action is going to grant you more wealth (going on quest for a reward counts as well).';
        this.longDescription = 'If you took price as a party, count only your share.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
