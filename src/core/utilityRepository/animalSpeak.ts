import { AbilityObject } from "../../components/abilityObject";
import { AbilityObjectFactory } from "../../components/abilityObjectFactory";
import { DescriptiveNumber } from "../../components/descriptiveNumber";
import { DescriptiveNumberFactory } from "../../components/descriptiveNumberFactory";
import { Utility } from "../utility";

export class AnimalSpeak extends Utility {

    constructor() {
        super('Speak');
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isCommunication).get(1)[0]);
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isAnimal).get(1)[0]);
        this.duration = new DescriptiveNumberFactory(this).filter((x: DescriptiveNumber) => x.type === DescriptiveNumber.Type.UtilityDuration).get(1)[0] as DescriptiveNumber;

        this.chance = 0.7
            / this.objects[0].rarity 
            / this.objects[1].rarity
            / this.duration.getValue()
        this.description = 'You can communicate with ' + this.objects[1].description + ' for '+this.duration.getDescription() + '. ' + this.objects[0].description;
        this.compensate();
    }
}