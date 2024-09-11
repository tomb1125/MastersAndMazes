import { Modifier } from "../modifier";

export class compensationModifier extends Modifier {
    name = 'Radiant Flame';
    namePrefix = '';
    description = '';
    weight = () => {return 0} //this is purposfully excluded by design

    constructor(name: any, mult?: number, bonus?: number) {
        super();
        this.name = name ? name : '';
        if(mult && bonus) {
            this.powerMultiplier = () => mult;
            this.powerMultiplier = () => bonus;
        }
    }
}