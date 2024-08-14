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
        //this.objects.push(new AbilityObjectFactory(this).filter((x: AbilityObject) => x.isArea).get(1)[0]);
        this.cooldown = Ability.Cooldown.Encounter;
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? 1 : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.chance = 6
         / range.getValue()
         / radius.getValue()
         / radius.getValue()
         / 125
        
        this.description = 'Shine a light in an area centered on a point within '+range.getValue()+'m with '+radius.getValue()+'m radius, for one hour.';
        //TODO add area as an object
        this.compensate();
    }
}