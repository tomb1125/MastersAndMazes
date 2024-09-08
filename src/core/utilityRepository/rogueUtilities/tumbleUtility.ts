import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class tumbleUtility extends Utility {

    constructor() {
        super('Tumble');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}

        this.cooldown = Ability.Cooldown.Encounter; //TODO add value
        this.chance = 0.35      
        this.value =  new DescriptiveNumber(5);
        this.compensate();
        this.description = 'As a reaction, when you are attacked, you can move away '+this.value.getDescription()+' meters in straight line. If you can move outside attack range, you dodge the attack. ';

    }
}