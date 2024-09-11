import { AffectsWeight } from "../../affectsWeight";
import { Attack } from "../../attack";
import { CharacterContext } from "../../characterContext";

export class radiantRayAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Radiant Flame');
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.generate();
    }
}
