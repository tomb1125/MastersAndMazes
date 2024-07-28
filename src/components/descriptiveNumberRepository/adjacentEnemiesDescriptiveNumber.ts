import { DescriptiveNumber } from "../descriptiveNumber";

export class adjacentEnemiesDescriptiveNumber extends DescriptiveNumber {
    
    constructor(value?: number) {
        super(value);        
        this.value = 3;
        this.type = DescriptiveNumber.Type.Small;
        this.name = 'the number of enemies adjacent to you.';
    }
}
