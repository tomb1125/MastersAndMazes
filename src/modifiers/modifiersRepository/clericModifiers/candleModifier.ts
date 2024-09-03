import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class candleModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.powerMultiplier = () => 1.3; 
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.name = 'Candle';
        this.namePrefix = 'Candle';
        this.description = 'Can be only used in a circle of lit candles.';
        this.longDescription = 'Circle doesn\t have to be perfect at all. 1 Gold of candles is enough to draw 1 meter of a "candle line". You can carry 50 Gold worth of candles in your backpack. Enemies can use an Action to damage 1 meter of a "candle line" or destry damaged line.';
        this.modifierType = Modifier.Type.Constraint;
    }
}
