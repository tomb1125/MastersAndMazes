import { Utils } from "../../../core/utils";
import { DescriptiveNumber } from "../../descriptiveNumber";

export class adjacentEnemiesDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(value);        
        this.value = Utils.AVG_ENEMIES_ADJACENT;
        this.type = DescriptiveNumber.Type.Small;
        this.name = 'the number of enemies adjacent to you';
    }
}
