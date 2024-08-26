import { AbilityObject } from "../../../components/abilityObject";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory";
import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { ModifierFactory } from "../../../modifiers/modifierFactory";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";
import { Utils } from "../../utils";


export class Light extends Utility {

    constructor() {
        let radius: DescriptiveNumber = new DescriptiveNumber(5);

        super('Light');
        this.range = 15;
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isLight).get(1)[0]);
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.chance = 1.5
         * Utils.getRangeCoeficient(this.range)
         * Utils.getRangeCoeficient(radius.getValue())
        this.cooldown = Ability.Cooldown.Encounter
         
        
        this.description = 'Using a Swift Action shine a light in an area centered on a point within '+this.range+'m, with a '+radius.getValue()+'m radius, until end of the encounter. ' +  
        this.objects[0].description;
        //TODO add light as an object
        this.compensate();
    }
}