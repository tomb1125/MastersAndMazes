import { AbilityObject } from "../../../components/abilityObject";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory";
import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class equipmentMaintenanceUtility extends Utility {

    constructor() {
        super('Equipment Maintenance');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Fighter) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}

        this.cooldown = Ability.Cooldown.Daily; 
        this.chance = 0.9      
        this.value =  new DescriptiveNumber(10);
        this.compensate();
        this.description = 'If you succeed repair and maintain equipment. You can repair weapons and armor after being damaged by acid and similar effects. Additionally until end of the day maintained armor grants extra '+this.value.getDescription()+' Armor Points.';

    }
}