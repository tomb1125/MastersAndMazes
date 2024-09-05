import { Utils } from "../../core/utils";
import { DescriptiveNumber } from "../descriptiveNumber";

export class assassinDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.AVG_ENEMIES_PER_PLAYER * 1.5);  
        this.lowValue = 0;          
        this.description = 'the number of enemies you defeated today';
        this.type = DescriptiveNumber.Type.Common;
        this.name = 'assassin';
    }
}
