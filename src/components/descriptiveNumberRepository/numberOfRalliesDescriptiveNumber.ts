import { Utils } from "../../core/utils.js";
import { DescriptiveNumber } from "../descriptiveNumber.js";

export class numberOfRalliesDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.AVG_RALLIES);  
        this.prefix = 'Stalwart'  
        this.lowValue = 0;    
        this.description = 'the number of times you rolled for dying today.';
        this.type = DescriptiveNumber.Type.Common;
    }
}
