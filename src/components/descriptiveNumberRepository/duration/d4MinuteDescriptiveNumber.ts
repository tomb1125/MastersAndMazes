import { Utils } from "../../../core/utils";
import { DescriptiveNumber } from "../../descriptiveNumber";

export class d4MinuteDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(value);
        const initValue = [1, 5].sort(() => 0.5 - Utils.random())[0];
        this.value = (initValue + 5) / 10;
        this.type = DescriptiveNumber.Type.UtilityDuration;
        this.name = 'D4 Minutes';
        this.description = initValue+(initValue === 1 ? ' minute' : ' minutes')
    }
}
