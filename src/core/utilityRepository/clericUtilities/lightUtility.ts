import { AbilityObject } from "../../../components/abilityObject.js";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory.js";
import { DescriptiveNumber } from "../../../components/descriptiveNumber.js";
import { ModifierFactory } from "../../../modifiers/modifierFactory.js";
import { repeatableModifier } from "../../../modifiers/modifiersRepository/repeatableModifier.js";
import { Ability } from "../../ability.js";
import { CharacterContext } from "../../characterContext.js";
import { Utility } from "../../utility.js";
import { Utils } from "../../utils.js";


export class lightUtility extends Utility {

    constructor() {

        super('Light');
        this.value = new DescriptiveNumber(5);
        this.range = 10;
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isLight).get(1)[0]);
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.chance = 1.5
         * Utils.getRangeCoeficient(this.range)
         * Utils.getRangeCoeficient(this.value.getValue())
        this.cooldown = Ability.Cooldown.Encounter

        const repeat: repeatableModifier = new repeatableModifier();
        repeat.setValue(2);
        this.modifiers.push(repeat);

        this.compensate();        
        this.description = 'Using a Swift Action shine a light in an area centered on a point within '+this.range+'m, with a '+Math.ceil(this.value.getValue())+'m radius, until end of the encounter. ' +  
        this.objects[0].description;
        //TODO add light as an object
    }
}