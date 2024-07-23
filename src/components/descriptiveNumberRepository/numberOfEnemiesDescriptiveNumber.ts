import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class numberOfEnemiesDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.avgEnemies);   
        this.lowValue = 1;     
        this.description = 'the number of enemies in this combat';
        this.type = DescriptiveNumber.Type.Common;
    }
}
