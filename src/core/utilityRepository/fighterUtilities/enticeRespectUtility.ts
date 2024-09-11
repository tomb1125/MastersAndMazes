import { AbilityObject } from "../../../components/abilityObject";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class enticeRespectUtility extends Utility {

    constructor() {
        super('Entice Respect');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Fighter) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isPerson).get(1)[0]);

        this.chance = 0.8;
        this.compensate();
        this.description = 'If you succeed you entice respect among '+this.objects[0].description+'. They will forgive minor missteps, give minor benefits or back away from conflict. This lasts until end of the day. ';
    }
}