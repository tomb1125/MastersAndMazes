import { AbilityObject } from "../../../components/abilityObject";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory";
import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { ModifierFactory } from "../../../modifiers/modifierFactory";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";
import { Utils } from "../../utils";


export class Light extends Utility {

    constructor() {
        let range: DescriptiveNumber = new DescriptiveNumber(Utils.D(3) * 5);
        let radius: DescriptiveNumber = new DescriptiveNumber(Utils.D(3) * 5);

        super('Light');
        this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isLight).get(1)[0]);
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? 1 : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.chance = 1.5
         * Utils.getRangeCoeficient(range.getValue())
         * Utils.getRangeCoeficient(radius.getValue())
        * ModifierFactory.getDPSMultiplier(this.modifiers, this); //TODO move to compensate
        this.cooldown = Ability.Cooldown.Encounter
         
        
        this.description = 'Using a Swift Action shine a light in an area centered on a point within '+range.getValue()+' with '+radius.getValue()+' radius, until end of the encounter. ';
        //TODO add light as an object
        this.compensate();
    }
}