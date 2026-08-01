import { DescriptiveNumber } from "../../components/descriptiveNumber.js";
import { Ability } from "../../core/ability.js";
import { AffectsWeight } from "../../core/affectsWeight.js";
import { Utils } from "../../core/utils.js";
import { WeightedList } from "../../core/weightedList.js";
import { Modifier } from "../modifier.js";

export class multipleModifier extends Modifier {
    
    constructor(affector: AffectsWeight) {
        super();

        let multiDistribution: WeightedList = new WeightedList();
        const two = new DescriptiveNumber(2);
        two.weight = () => {return 9};
        two.name = 'Double';
        const three = new DescriptiveNumber(3);
        three.weight = () => {return 3};
        three.name = 'Triple';
        const four = new DescriptiveNumber(4);
        four.weight = () => {return 1};
        four.name = 'Quadruple';
        const five = new DescriptiveNumber(5);
        five.weight = () => {return 0.33};
        five.name = 'Quintiple';
        multiDistribution.items = [two, three, four, five];

        this.numericComponents = multiDistribution.get(1) as DescriptiveNumber[];
        this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Attack ? Utils.COMMON_MODIFIER : 0}
        this.powerMultiplier = () => {return 0.8 / this.numericComponents[0].getValue()};
        this.name = 'Multi '+this.numericComponents[0].getValue();
        this.namePrefix = this.numericComponents[0].name;
        this.description = 'After this action, repeat this action '+(this.numericComponents[0].getValue() - 1)+' time, without paying mana cost. You cannot change targets.';
        this.modifierType = Modifier.Type.Improvement;
    }
}
