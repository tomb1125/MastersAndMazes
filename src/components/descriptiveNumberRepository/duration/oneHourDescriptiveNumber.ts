import { DescriptiveNumber } from "../../descriptiveNumber";

export class oneHourDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(value);     
        this.prefix = 'Hourly'             
        this.value = 2;
        this.description = 'one hour'
        this.type = DescriptiveNumber.Type.UtilityDuration;
        this.name = 'One Hour';
    }
}
