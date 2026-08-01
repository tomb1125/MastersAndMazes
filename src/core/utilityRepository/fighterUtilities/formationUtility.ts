import { DescriptiveNumber } from "../../../components/descriptiveNumber.js";
import { Ability } from "../../ability.js";
import { CharacterContext } from "../../characterContext.js";
import { Rule } from "../../rule.js";
import { Utility } from "../../utility.js";
import { Utils } from "../../utils.js";


export class formationUtility extends Utility {

    constructor() {
        super('Formation');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Fighter) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}

        this.cooldown = Ability.Cooldown.Encounter; 
        this.chance = 0.65;
        this.value = new DescriptiveNumber(3);
        this.compensate();
        this.description = 'As a swift action choose two (you may select them in any order): you and one adjacent ally regain '+this.value.getDescription()+' Armor Points; you and one adjacent ally move '+this.value.getDescription()+' squares; forcefully push one adjacent enemy '+this.value.getDescription()+' squares. ';
        this.longDescription = Utils.getRule(Rule.Name.ForcefulPush).description;


    }
}