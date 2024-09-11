import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class maximumDistanceDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.AVG_LONGEST_DISTANCE);    
        this.prefix = 'Runners'  
        this.lowValue = 1;    
        this.description = 'the distance to your starting location in this combat';
        this.type = DescriptiveNumber.Type.Common;
    }
}
