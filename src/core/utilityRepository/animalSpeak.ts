import { AbilityObject } from "../../components/abilityObject";
import { AbilityObjectFactory } from "../../components/abilityObjectFactory";
import { DescriptiveNumber } from "../../components/descriptiveNumber";
import { DescriptiveNumberFactory } from "../../components/descriptiveNumberFactory";
import { Utility } from "../utility";

export class AnimalSpeak extends Utility {

    constructor() {
        super('Speak');
        this.objects.push(AbilityObjectFactory.getAll().filter((x: AbilityObject) => x.isAnimal).get(1)[0] as AbilityObject);
        this.objects.push(AbilityObjectFactory.getAll().filter((x: AbilityObject) => x.isCommunication).get(1)[0] as AbilityObject);
        //this.duration = new DescriptiveNumber(1); //TODO move to new 
        //this.duration.description = '1 minute';
        this.duration = DescriptiveNumberFactory.getAll().filter((x: DescriptiveNumber) => x.type === DescriptiveNumber.Type.UtilityDuration).get(1)[0] as DescriptiveNumber;

        this.chance = 0.6
            / this.objects[0].rarity 
            / this.objects[1].rarity
            / this.duration.getValue()
        this.description = 'You can communicate with ' + this.objects[0].description + ' for '+this.duration.getDescription() + '. ' + this.objects[1].description;
        this.compensate();
    }
}