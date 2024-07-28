import { WeightedList } from "../core/weightedList";
import { DescriptiveNumber } from "./descriptiveNumber";

export class AbilityObjectFactory {
    public static get(count: number) : DescriptiveNumber[] {
        return this.getAll().get(count) as DescriptiveNumber[];
    }

    public static getAll(): WeightedList {
        const nums: WeightedList = new WeightedList();

        return nums as WeightedList;
    }
}