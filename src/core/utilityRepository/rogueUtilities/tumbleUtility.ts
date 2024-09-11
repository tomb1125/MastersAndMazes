import { AbilityObject } from "../../../components/abilityObject";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory";
import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


export class tumbleUtility extends Utility {

    constructor() {
        super('Tumble');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isMovement).get(1)[0]);

        this.cooldown = Ability.Cooldown.Encounter; 
        this.chance = 0.35      
        this.value =  new DescriptiveNumber(5);
        this.compensate();
        this.description = 'Use as reaction when being attacked. If you succeed you can move away '+this.value.getDescription()+' meters. '+this.objects[0].description+' If you can move outside attack range or behind cover, you dodge the attack. ';

    }
}