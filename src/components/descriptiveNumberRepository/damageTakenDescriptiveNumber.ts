import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class damageTakenDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.avgHealth -1);    
        this.lowValue = 0;    
        this.description = 'your current damage taken';
        this.type = DescriptiveNumber.Type.Common;
    }
}
