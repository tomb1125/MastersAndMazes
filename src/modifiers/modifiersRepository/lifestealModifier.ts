import { DescriptiveNumberFactory } from "../../components/descriptiveNumberFactory";
import { PowerModifier } from "../../core/powerModifier";
import { Utils } from "../../core/utils";
import { Modifier } from "../modifier";

export class lifestealModifier extends Modifier {
    
    constructor() {
        super();
        this.weight = 1; 
        this.type = Modifier.Type.Improvement;
        this.name = 'Lifesteal'; 
        this.numericComponents = DescriptiveNumberFactory.get(1);
        this.namePrefix = 'Leeching'; 
        this.description = 'When you hit, heal yourself equal to: '+this.numericComponents[0].getDescription()+'.';
        this.powerBonus = () => {return - this.numericComponents[0].getValue()};
        this.longDescription = '';
        this.elements =  [[Modifier.Element.Holy, Modifier.Element.Shadow, Modifier.Element.Curse, Modifier.Element.Nature].sort(() => 0.5 - Utils.random())[1]];
    }
}
