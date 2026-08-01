import { Utils } from "../../core/utils.js";
import { DescriptiveNumber } from "../descriptiveNumber.js";

export class numberOfScarsDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.AVG_SCARS);    
        this.prefix = 'Veterans'   
        this.lowValue = 0;    
        this.description = 'the number of your Scars';
        this.type = DescriptiveNumber.Type.Common;
    }
}
