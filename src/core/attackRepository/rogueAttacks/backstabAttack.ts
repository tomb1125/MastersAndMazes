import { AffectsWeight } from "../../affectsWeight";
import { Attack } from "../../attack";
import { CharacterContext } from "../../characterContext";

export class backstabAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Backstab');
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.generate();
    }
}
