import { AbilityObject } from "../../../components/abilityObject";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory";
import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { ModifierFactory } from "../../../modifiers/modifierFactory";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class auguryUtility extends Utility {

    constructor() {
        let numberOfQuestions;

        super('Augury');
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isQuestion).get(1)[0]);
        this.cooldown = Ability.Cooldown.Adventure;
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        let tempChance: number = 1.5
            / this.objects[0].rarity 

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