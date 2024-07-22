import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class d4DescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(value);        
        this.value = Math.ceil(Utils.random() * 4);
        this.type = DescriptiveNumber.Type.Common;
        this.name = 'D4';
    }
}
