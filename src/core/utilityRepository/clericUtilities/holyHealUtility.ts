import { DescriptiveNumber } from "../../../components/descriptiveNumber.js";
import { DescriptiveNumberFactory } from "../../../components/descriptiveNumberFactory.js";
import { Ability } from "../../ability.js";
import { CharacterContext } from "../../characterContext.js";
import { Utility } from "../../utility.js";
import { Utils } from "../../utils.js";


export class holyHealUtility extends Utility {

    constructor() {
        super('Heal');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}

        this.cooldown = Ability.Cooldown.Encounter;
        this.chance = 0.7;

        const normalValue: number = 10;
        if(!this.value && Utils.random() < Utils.ATTACK_DESCRIPTIVE_NUMBER_CHANCE) {
            this.value = new DescriptiveNumberFactory(this).filter((x: DescriptiveNumber) => x.type === DescriptiveNumber.Type.Common).get(1)[0];
            this.value.addBonus(Math.ceil(normalValue - this.value.getValue()));
        } else {
            this.value = new DescriptiveNumber(normalValue);
        } 
        this.compensate();
        this.description = 'Using Standard Action, restore '+this.value.getDescription()+' health to yourself and one ally within 5 squares. ';

    }
}