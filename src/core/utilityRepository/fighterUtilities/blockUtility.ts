import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class blockUtility extends Utility {

    constructor() {
        super('Block');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Fighter) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}

        this.cooldown = Ability.Cooldown.Encounter; 
        this.chance = 0.45;
        this.value = new DescriptiveNumber(15);
        this.compensate();
        this.description = 'Use as reaction when being attacked. If you succeed you reduce damage by '+this.value.getDescription()+'. You gain 2 Boons for chance roll if you use a shield. ';

    }
}