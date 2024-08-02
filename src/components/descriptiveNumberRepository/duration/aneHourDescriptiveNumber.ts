import { DescriptiveNumber } from "../../descriptiveNumber";

export class oneHourDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(value);        
        this.value = 1;
        this.description = 'one hour'
        this.type = DescriptiveNumber.Type.UtilityDuration;
        this.name = 'One Hour';
    }
}
