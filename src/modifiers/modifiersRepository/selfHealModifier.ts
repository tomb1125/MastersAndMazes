import { DescriptiveNumberFactory } from "../../components/descriptiveNumberFactory";
import { Ability } from "../../core/ability";
import { Utils } from "../../core/utils";
import { Modifier } from "../modifier";

export class selfHealModifier extends Modifier {
    
    constructor() {
        super();
        this.weight = 1; 
        this.type = Modifier.Type.Improvement;
        this.name = 'Self Heal'; 
        this.numericComponents = DescriptiveNumberFactory.get(1);
        this.namePrefix = 'Healing'; 
        this.description = 'When you hit, heal yourself equal to: '+this.numericComponents[0].getDescription()+'.';
        this.powerBonus = () => {return - this.numericComponents[0].getValue()};
        this.longDescription = '';
        this.elements =  [[Ability.Element.Radiant, Ability.Element.Dark, Ability.Element.Emotion].sort(() => 0.5 - Utils.random())[1]];
    }
}
