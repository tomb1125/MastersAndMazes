import { AbilityObject } from "../../../components/abilityObject";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory";
import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class muscleTrainingUtility extends Utility {

    constructor() {
        super('Muscle Training');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Fighter) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isTraining).get(1)[0]);

        this.cooldown = Ability.Cooldown.Adventure;
        this.chance = 0.7;
        this.value = new DescriptiveNumber(10);
        this.compensate();
        this.description = 'You can only perform this action when you have access to gymnasium, arena or other traning ground. Until end of Adventure increase your Strenght, Dexterity or Constitution by '+this.value.getDescription()+' (but not above 70). Also gain 1 Experience Point. ' + this.objects[0].description;
    }
}