import { DescriptiveNumber } from "../../components/descriptiveNumber";
import { WeightedList } from "../../core/weightedList";
import { Modifier } from "../modifier";

export class repeatableModifier extends Modifier {
    
    constructor() {
        super();

        let multiDistribution: WeightedList = new WeightedList();
        const two = new DescriptiveNumber(2);
        two.weight = 9;
        const three = new DescriptiveNumber(3);
        three.weight = 3;
        const four = new DescriptiveNumber(4);
        four.weight = 1;
        const five = new DescriptiveNumber(5);
        five.weight = 0.333;
        
        multiDistribution.items = [two, three, four, five];
        this.numericComponents = multiDistribution.get(1) as DescriptiveNumber[];
        this.powerMultiplier = () => {return 1 / this.numericComponents[0].getValue()};
        this.name = 'Repeat '+this.numericComponents[0].getValue();
        this.namePrefix = 'Repeatable '
        this.description = 'You can use this ability '+this.numericComponents[0].getValue()+' times before it goes on cooldown.';
        this.type = Modifier.Type.Improvement;
    }

    setValue(x: number) {
        this.description = this.description.replace(this.numericComponents[0].getValue() +'', x as unknown as string);
        this.namePrefix = this.namePrefix.replace(this.numericComponents[0].getValue() +'', x as unknown as string);
        this.name = this.name.replace(this.numericComponents[0].getValue() +'', x as unknown as string);
        this.numericComponents = [new DescriptiveNumber(x)];
    }
}
