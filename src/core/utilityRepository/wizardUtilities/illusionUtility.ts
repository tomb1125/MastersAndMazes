import { AbilityObject } from "../../../components/abilityObject";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class illusionUtility extends Utility {

    constructor() {
        super('Illusion');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Wizard) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isIllusion).get(1)[0]);
        this.chance = 1;
        this.compensate();

        
        this.description = 'On success create an illusion of a size of a room, it lasts about 10 minutes. You can set all the details as you cast it, but you cannot change them after that. Eg. if you can cast Illusion of a friendly cat that meows if someons comes close, you cannot make it pounce if you changed your mind later. '+this.objects[0].description;

    }
}