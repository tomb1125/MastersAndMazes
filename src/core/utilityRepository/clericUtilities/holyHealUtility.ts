import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { DescriptiveNumberFactory } from "../../../components/descriptiveNumberFactory";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";
import { Utils } from "../../utils";


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
            this.value.compensate();
        } else {
            this.value = new DescriptiveNumber(normalValue);
        } 
        this.compensate();
        this.description = 'Using Standard Action, restore '+this.value.getDescription()+' health to yourself and one ally within 5 squares. ';

    }
}