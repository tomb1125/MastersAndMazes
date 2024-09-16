import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { DescriptiveNumberFactory } from "../../../components/descriptiveNumberFactory";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Rule } from "../../rule";
import { Utility } from "../../utility";
import { Utils } from "../../utils";


export class piousPrayerUtility extends Utility {

    constructor() {
        super('Prayer');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}

        this.cooldown = Ability.Cooldown.Encounter;
        this.chance = 0.7;

        const normalValue: number = 7;
        this.value = new DescriptiveNumber(normalValue);

        this.compensate();
        this.description = 'If you are in combat, gain '+this.value.getDescription()+' Blessing Points (see rules) and your next ability chance roll will gain 1 Boon. Double both values if you are fighting Undead, Devils or Demons. This ability can be only used in first two rounds of combat. ';
        this.longDescription = Utils.getRule(Rule.Name.Blessing).description;
    }
}