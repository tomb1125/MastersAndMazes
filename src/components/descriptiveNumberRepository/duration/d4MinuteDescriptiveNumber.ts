import { Utils } from "../../../core/utils.js";
import { DescriptiveNumber } from "../../descriptiveNumber.js";

export class d4MinuteDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(value);
        const initValue = [1, 5, 10].sort(() => 0.5 - Utils.random())[0];
        this.value = (initValue + 5) / 15;
        this.type = DescriptiveNumber.Type.UtilityDuration;
        this.name = 'D4 Minutes';
        this.description = initValue+(initValue === 1 ? ' minute' : ' minutes')
    }
}
