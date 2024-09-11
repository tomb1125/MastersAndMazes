import { AbilityObject } from "../../../components/abilityObject";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory";
import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class seanceUtility extends Utility {

    constructor() {
        super('Seance');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isCommunication).get(1)[0]);
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isCorpse).get(1)[0]);
        this.duration = new DescriptiveNumber(1);
        this.duration.description = 'ten minutes'; 

        this.chance = 0.85
            / this.objects[0].rarity 
            / this.objects[1].rarity 
            / this.duration.getValue() 
        this.description = 'You can communicate with '+this.objects[1].description+' for '+this.duration.getDescription() + '. ' + this.objects[0].description;
        this.compensate();
    }
}