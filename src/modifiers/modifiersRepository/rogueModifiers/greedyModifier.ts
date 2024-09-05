import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class greedyModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.5; 
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ? CharacterContext.IN_CLASS_MODIFIER : 0.2}
        this.name = 'Greedy';
        this.namePrefix = 'Greedy';
        this.description = 'Can be only used when you obtained 20 or more gold today (or equivalent in goods).';
        this.longDescription = 'If you took price as a party, count only your share.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
