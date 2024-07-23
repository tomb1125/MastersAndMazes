import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class assassinDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.avgEnemies * 2);        
        this.description = 'the number of enemies you defeated today';
        this.type = DescriptiveNumber.Type.Common;
        this.name = 'D4';
    }
}
