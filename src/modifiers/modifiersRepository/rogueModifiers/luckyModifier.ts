import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class luckyModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.4; 
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.name = 'Trinket';
        this.namePrefix = 'Trinket';
        this.description = 'When you add this ability to your character you gain "Lucky Coin", "Favourite Hat" or similar trinket (unless they have one). You cannot use this ability if you lose this trinket.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
