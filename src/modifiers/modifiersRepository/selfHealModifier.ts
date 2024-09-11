import { DescriptiveNumber } from "../../components/descriptiveNumber";
import { Ability } from "../../core/ability";
import { AffectsWeight } from "../../core/affectsWeight";
import { Utils } from "../../core/utils";
import { Modifier } from "../modifier";

export class selfHealModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();
        this.modifierType =Modifier.Type.Improvement;
        this.numericComponents = [new DescriptiveNumber(Utils.D(10))];//[new DescriptiveNumberFactory(affector).filter((x: DescriptiveNumber) => x.type === DescriptiveNumber.Type.Small).get(1)[0] as DescriptiveNumber];
        this.name = 'Self Heal '+this.numericComponents[0].getValue(); 
        this.weight = (x?: AffectsWeight) => {return x?.cooldown === Ability.Cooldown.Encounter ? 1 : 0}
        this.namePrefix = 'Healing'; 
        this.description = 'When you hit, heal yourself '+this.numericComponents[0].getDescription()+'.';
        this.powerBonus = () => {return - this.numericComponents[0].getValue()};
        this.elements =  [[Ability.Element.Radiant, Ability.Element.Dark, Ability.Element.Emotion].sort(() => 0.5 - Utils.random())[1]];
    }
}
