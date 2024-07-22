import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class d10DescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(value);        
        this.value = Math.ceil(Utils.random() * 10);
        this.type = DescriptiveNumber.Type.Common;
    }
}
