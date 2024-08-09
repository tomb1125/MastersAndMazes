import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class numberOfEnemiesDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(5 * Utils.AVG_ENEMIES_PER_PLAYER);   
        this.lowValue = 1;     
        this.description = '5 times the number of enemies per player in combat (rounded up)';
        this.type = DescriptiveNumber.Type.Common;
    }
}
