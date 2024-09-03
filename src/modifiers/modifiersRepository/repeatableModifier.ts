import { DescriptiveNumber } from "../../components/descriptiveNumber";
import { AffectsWeight } from "../../core/affectsWeight";
import { WeightedList } from "../../core/weightedList";
import { Modifier } from "../modifier";

export class repeatableModifier extends Modifier {
    
    constructor(affector?: AffectsWeight) {
        super();

        let multiDistribution: WeightedList = new WeightedList();
        const two = new DescriptiveNumber(2);
        two.weight = () => {return 9};
        const three = new DescriptiveNumber(3);
        three.weight =() => {return 3};
        const four = new DescriptiveNumber(4);
        four.weight = () => {return 1};
        const five = new DescriptiveNumber(5);
        five.weight = () => {return 0.333};
        
        multiDistribution.items = [two, three, four, five];
        this.numericComponents = multiDistribution.get(1) as DescriptiveNumber[];
        this.weight = (x?: AffectsWeight) => {return 0} //this modifier is excluded for now purposfully. It behaves differently for utilities and for attacks.
        this.powerMultiplier = () => {return 1 / this.numericComponents[0].getValue()};
        this.name = 'Repeat '+this.numericComponents[0].getValue();
        this.namePrefix = ''
        this.description = 'You can use this ability '+this.numericComponents[0].getValue()+' times before it goes on cooldown.';
        this.modifierType = Modifier.Type.Improvement;
    }

    setValue(x: number) {
        this.description = this.description.replace(this.numericComponents[0].getValue() +'', x as unknown as string);
        this.namePrefix = this.namePrefix.replace(this.numericComponents[0].getValue() +'', x as unknown as string);
        this.name = this.name.replace(this.numericComponents[0].getValue() +'', x as unknown as string);
        this.numericComponents = [new DescriptiveNumber(x)];
    }
}
