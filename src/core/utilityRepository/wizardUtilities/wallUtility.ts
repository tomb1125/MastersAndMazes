import { AbilityObject } from "../../../components/abilityObject.js";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory.js";
import { DescriptiveNumber } from "../../../components/descriptiveNumber.js";
import { Ability } from "../../ability.js";
import { Utility } from "../../utility.js";


export class wallUtility extends Utility {

    constructor() {
        super('Wall');
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isBulkMaterial).get(1)[0]);

        this.cooldown = Ability.Cooldown.Encounter; 
        this.chance = 1 
        this.value = new DescriptiveNumber(15);
        this.cooldown = Ability.Cooldown.Encounter; 

        this.compensate();

        
        this.description = 'On success create a thin Wall with length up to '+this.value.getDescription()+' squares and 3 square heigth standing firmly on ground. It can be only climbed only with Climb Movement. As you create it, you can create one turn for each total 10 squares of length, but no sharp turns are allowed. Wall '+this.objects[0].description;

    }
}