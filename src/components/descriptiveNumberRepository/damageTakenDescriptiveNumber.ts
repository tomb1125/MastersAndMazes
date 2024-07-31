import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class currentHealthDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.avgHealth -1);    
        this.description = 'your current damage taken';
        this.type = DescriptiveNumber.Type.Common;
    }
}