import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Rule } from "../../rule";
import { Utility } from "../../utility";
import { Utils } from "../../utils";


export class lineInSandUtility extends Utility {

    constructor() {
        super('Line in a Sand');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Fighter) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}

        this.chance = 0.8; //TODO add value.
        this.value = new DescriptiveNumber(3);
        this.compensate();
        this.description = 'Draw a line on a ground, standing on one side of this line. In the current or nearest combat you gain 1 Boon for all Attacks against enemies who crossed the line to your side or made a ranged attack through it to your side. This does not work on enemies who crossed the line before combat (should you draw it too far). This bonus does not stack with other "Lines in Sand". ';

    }
}