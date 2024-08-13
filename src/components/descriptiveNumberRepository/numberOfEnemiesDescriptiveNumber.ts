import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class numberOfEnemiesDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.AVG_ENEMIES_ADJACENT);   
        this.lowValue = 1;     
        this.description = 'Number of adjacent enemies.';
        this.type = DescriptiveNumber.Type.Common;
    }
}
