import { Utils } from "../core/utils";
import { WeightedList } from "../core/weightedList";
import { DescriptiveNumber } from "./descriptiveNumber";

export class DescriptiveNumberFactory {
    
    public static get(count: number): DescriptiveNumber[] {

        const nums: WeightedList = new WeightedList();

        
        const numericD6 = new DescriptiveNumber();
        numericD6.value = Math.ceil(Utils.random() * 6);
        numericD6.type = DescriptiveNumber.Type.Common;
        nums.push(numericD6);

        return nums.get(count) as DescriptiveNumber[];
    }
}