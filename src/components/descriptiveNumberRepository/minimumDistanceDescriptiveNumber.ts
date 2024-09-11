import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class minimumDistanceDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.AVG_CLOSTEST_DISTANCE);    
        this.prefix = 'Loners'  
        this.lowValue = 1;    
        this.description = 'the distance to the closest ally in combat';
        this.type = DescriptiveNumber.Type.Common;
    }
}
