import { Utils } from "../../core/utils.js";
import { DescriptiveNumber } from "../descriptiveNumber.js";

export class currentHealthDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.avgHealth);    
        this.prefix = 'Vital'    
        this.lowValue = 1;    
        this.description = 'your current health';
        this.type = DescriptiveNumber.Type.Common;
    }
}
