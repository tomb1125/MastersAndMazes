import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { DescriptiveNumberFactory } from "../../../components/descriptiveNumberFactory";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";
import { Utils } from "../../utils";


export class holyHealUtility extends Utility {

    constructor() {
        super('Holy Heal');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}

        this.cooldown = Ability.Cooldown.Encounter;
        this.chance = 0.7;

        const normalValue: number = 10;
        if(!this.value && Utils.random() < Utils.ATTACK_DESCRIPTIVE_NUMBER_CHANCE) {
            this.value = new DescriptiveNumberFactory(this).filter((x: DescriptiveNumber) => x.type === DescriptiveNumber.Type.Common).get(1)[0];
            this.value.addBonus(Math.ceil(normalValue - this.value.getValue()));
            console.log(this.value.getDescription())
            this.value.compensate();
            console.log(this.value.getDescription())
            console.log(this.value.getValue())
        } else {
            this.value = new DescriptiveNumber(normalValue);
            console.log('norm' +this.value.getDescription())
        } 
        console.log('val pre'+this.value.getValue())       
        this.compensate();
        console.log('val post'+this.value.getValue())   
        console.log(this.value.getDescription())
        this.description = 'Using Standard Action, restore '+this.value.getDescription()+' health to yourself and one ally within 5 squares. ';

        console.log('========');
    }
}