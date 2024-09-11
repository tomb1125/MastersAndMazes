import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class numberOfTurnsDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.AVG_TURN);    
        this.prefix = 'Growing'   
        this.lowValue = 1;    
        this.description = 'the number of rounds in combat';
        this.type = DescriptiveNumber.Type.Common;
    }
}
