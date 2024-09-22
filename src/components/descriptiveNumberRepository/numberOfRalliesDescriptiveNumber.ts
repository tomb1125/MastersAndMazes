import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class numberOfRalliesDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.AVG_RALLIES);  
        this.prefix = 'Stalwart'  
        this.lowValue = 0;    
        this.description = 'the number of times you rolled for dying today.';
        this.type = DescriptiveNumber.Type.Common;
    }
}
