import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class numberOfScarsDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.AVG_SCARS);    
        this.lowValue = 0;    
        this.description = 'the number of your Scars';
        this.type = DescriptiveNumber.Type.Common;
    }
}
