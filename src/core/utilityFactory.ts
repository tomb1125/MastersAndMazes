import { Utility } from "./utility";
import { WeightedList } from "./weightedList";

export class UtilityFactory {
    
    public static get(count: number) : Utility[] {
        return this.getAll().get(count) as Utility[];
    }

    public static getAll(): WeightedList {

        const nums: WeightedList = new WeightedList();

        return nums as WeightedList;
    }
}