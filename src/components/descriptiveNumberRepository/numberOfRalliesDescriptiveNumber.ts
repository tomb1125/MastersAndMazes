import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class numberOfRalliesDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.AVG_RALLIES);    
        this.lowValue = 0;    
        this.description = 'the number of times you rallied today (see rules)';
        this.type = DescriptiveNumber.Type.Common;
    }
}
