import { Utils } from "../core/utils";
import { WeightedList } from "../core/weightedList";
import { DescriptiveNumber } from "./descriptiveNumber";
import { adjacentEnemiesDescriptiveNumber } from "./descriptiveNumberRepository/AdjacentEnemiesDescriptiveNumber";
import { assassinDescriptiveNumber } from "./descriptiveNumberRepository/assassinDescriptiveNumber";
import { currentHealthDescriptiveNumber } from "./descriptiveNumberRepository/currentHealthDescriptiveNumber";
import { d10DescriptiveNumber } from "./descriptiveNumberRepository/d10DescriptiveNumber";
import { d4DescriptiveNumber } from "./descriptiveNumberRepository/d4DescriptiveNumber";
import { d4MinuteDescriptiveNumber } from "./descriptiveNumberRepository/duration/d4MinuteDescriptiveNumber";
import { oneHourDescriptiveNumber } from "./descriptiveNumberRepository/duration/aneHourDescriptiveNumber";
import { numberOfEnemiesDescriptiveNumber } from "./descriptiveNumberRepository/numberOfEnemiesDescriptiveNumber";
import { numberOfTurnsDescriptiveNumber } from "./descriptiveNumberRepository/numberOfTurnsDescriptiveNumber";

export class DescriptiveNumberFactory {
    
    public static get(count: number) : DescriptiveNumber[] {
        return this.getAll().get(count) as DescriptiveNumber[];
    }

    public static getAll(): WeightedList {

        const nums: WeightedList = new WeightedList();

        nums.push(new d10DescriptiveNumber());
        nums.push(new d4DescriptiveNumber());
        nums.push(new numberOfEnemiesDescriptiveNumber());
        nums.push(new numberOfTurnsDescriptiveNumber());
        nums.push(new currentHealthDescriptiveNumber());
        nums.push(new currentHealthDescriptiveNumber());
        nums.push(new assassinDescriptiveNumber());
        nums.push(new adjacentEnemiesDescriptiveNumber());

        
        nums.push(new d4MinuteDescriptiveNumber());
        nums.push(new oneHourDescriptiveNumber());

        return nums as WeightedList;
    }
}