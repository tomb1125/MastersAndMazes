import { Utils } from "../../core/utils.js";
import { DescriptiveNumber } from "../descriptiveNumber.js";

export class damageTakenDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.avgHealth -1);  
        this.prefix = 'Enraged'    
        this.lowValue = 0;    
        this.description = 'your current damage taken';
        this.type = DescriptiveNumber.Type.Common;
    }
}
