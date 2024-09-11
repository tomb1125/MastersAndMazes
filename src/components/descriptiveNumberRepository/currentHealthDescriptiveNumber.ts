import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class currentHealthDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.avgHealth);    
        this.prefix = 'Vital'    
        this.lowValue = 1;    
        this.description = 'your current health';
        this.type = DescriptiveNumber.Type.Common;
    }
}
