import { AbilityObject } from "../../../components/abilityObject";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory";
import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { ModifierFactory } from "../../../modifiers/modifierFactory";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class PickpocketingUtility extends Utility {

    constructor() {

        super('Pickpocketing');
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isPerson).get(1)[0]);
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.chance = 0.9;
        this.description = 'You can quickly steal one object from target ' + this.objects[0].description + '. If this is the last charge of this ability and you fail, the target might suspect someone trying to steal from them. ';

        this.compensate();
    }
}