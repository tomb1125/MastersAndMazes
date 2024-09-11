import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { DescriptiveNumberFactory } from "../../../components/descriptiveNumberFactory";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class piousPrayerUtility extends Utility {

    constructor() {
        super('Prayer');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}

        this.cooldown = Ability.Cooldown.Encounter;
        this.chance = 0.7;

        const normalValue: number = 7;
        this.value = new DescriptiveNumber(normalValue);

        this.compensate();
        this.description = 'If you are in combat, gain '+this.value.getDescription()+' Blessing Points (see rules) or double this value if you are fighting Undead, Devils or Demons. Additionally your next ability chance roll has 1 Boon. This action can be only made as the first Standard Action you make each combat. ';
    }
}