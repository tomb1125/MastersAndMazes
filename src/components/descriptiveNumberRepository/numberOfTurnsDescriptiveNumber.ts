import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class numberOfTurnsDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(2 * Utils.AVG_TURN);    
        this.lowValue = 1;    
        this.description = 'two times the number of rounds in combat';
        this.type = DescriptiveNumber.Type.Common;
    }
}
