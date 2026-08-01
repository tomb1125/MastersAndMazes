import { AbilityObject } from "../../../components/abilityObject.js";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory.js";
import { DescriptiveNumber } from "../../../components/descriptiveNumber.js";
import { Ability } from "../../ability.js";
import { CharacterContext } from "../../characterContext.js";
import { Utility } from "../../utility.js";


export class equipmentMaintenanceUtility extends Utility {

    constructor() {
        super('Equipment Maintenance');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Fighter) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}

        this.chance = 0.9      
        this.value =  new DescriptiveNumber(10);
        this.compensate();
        this.description = 'If you succeed repair and maintain equipment. You can repair weapons and armor after being damaged by acid and similar effects. Additionally until end of the day maintained armor or shield grants extra '+this.value.getDescription()+' Armor Points (does not stack). ';

    }
}