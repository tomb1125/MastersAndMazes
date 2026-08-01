import { Utils } from "../../core/utils.js";
import { DescriptiveNumber } from "../descriptiveNumber.js";

export class potionsDrankDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(Utils.AVG_POTIONS); 
        this.prefix = 'Thirsty'   
        this.lowValue = 0;    
        this.description = 'the number of potions you drank today';
        this.type = DescriptiveNumber.Type.Common;
    }
}
