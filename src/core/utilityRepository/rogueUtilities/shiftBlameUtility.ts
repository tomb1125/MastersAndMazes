import { AbilityObject } from "../../../components/abilityObject";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class shiftBlameUtility extends Utility {

    constructor() {
        super('Shift Blame');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isPerson).get(1)[0]);

        this.chance = 0.7
        this.description = 'When you are accussed of something immiedietly shift blame to someone else. For about 15 meters '+this.objects[0].description+' will believe this lie, before starting to investigate it more thoroughly. ';
        this.compensate();
    }
}