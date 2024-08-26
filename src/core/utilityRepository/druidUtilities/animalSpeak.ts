import { AbilityObject } from "../../../components/abilityObject";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory";
import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { DescriptiveNumberFactory } from "../../../components/descriptiveNumberFactory";
import { ModifierFactory } from "../../../modifiers/modifierFactory";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";

export class AnimalSpeak extends Utility {

    constructor() {
        super('Speak');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Druid) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isCommunication).get(1)[0]);
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isAnimal).get(1)[0]);
        this.duration = new DescriptiveNumber(1);
        this.duration.description = 'ten minutes'; //new DescriptiveNumberFactory(this).filter((x: DescriptiveNumber) => x.type === DescriptiveNumber.Type.UtilityDuration).get(1)[0] as DescriptiveNumber;

        this.chance = 0.5
            / this.objects[0].rarity 
            / this.objects[1].rarity
            / this.duration.getValue() 
        this.description = 'You can communicate with ' + this.objects[1].description + ' for '+this.duration.getDescription() + '. ' + this.objects[0].description;
        this.compensate();
    }
}