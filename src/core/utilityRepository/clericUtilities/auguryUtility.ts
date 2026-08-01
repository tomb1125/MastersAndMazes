import { AbilityObject } from "../../../components/abilityObject.js";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory.js";
import { DescriptiveNumber } from "../../../components/descriptiveNumber.js";
import { ModifierFactory } from "../../../modifiers/modifierFactory.js";
import { Ability } from "../../ability.js";
import { CharacterContext } from "../../characterContext.js";
import { Utility } from "../../utility.js";


export class auguryUtility extends Utility {

    constructor() {
        let numberOfQuestions;

        super('Augury');
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isQuestion).get(1)[0]);
        this.cooldown = Ability.Cooldown.Adventure;
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        let tempChance: number = 1.5;

        if(tempChance > 2) {
            numberOfQuestions = new DescriptiveNumber(3);
        } else if(tempChance > 1) {
            numberOfQuestions = new DescriptiveNumber(2);
        } else {
            numberOfQuestions = new DescriptiveNumber(1);
        }

        this.chance = tempChance / numberOfQuestions.getValue();
        this.description = 'After few minutes of meditation you can ask '+numberOfQuestions.getValue()+' question' +
          (numberOfQuestions.getValue() === 1 ? '' : 's') +
          ' to the higher power. ' +  
          this.objects[0].description;

        this.compensate();
    }
}