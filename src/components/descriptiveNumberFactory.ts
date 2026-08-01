import { WeightedList } from "../core/weightedList.js";
import { DescriptiveNumber } from "./descriptiveNumber.js";
import { Factory } from "../core/factory.js";
import { AffectsWeight } from "../core/affectsWeight.js";
//factory imports
import { adjacentEnemiesDescriptiveNumber } from "./descriptiveNumberRepository/small/adjacentEnemiesDescriptiveNumber.js";
import { potionsDrankDescriptiveNumber } from "./descriptiveNumberRepository/potionsDrankDescriptiveNumber.js";
import { numberOfTurnsDescriptiveNumber } from "./descriptiveNumberRepository/numberOfTurnsDescriptiveNumber.js";
import { numberOfScarsDescriptiveNumber } from "./descriptiveNumberRepository/numberOfScarsDescriptiveNumber.js";
import { numberOfRalliesDescriptiveNumber } from "./descriptiveNumberRepository/numberOfRalliesDescriptiveNumber.js";
import { minimumDistanceDescriptiveNumber } from "./descriptiveNumberRepository/minimumDistanceDescriptiveNumber.js";
import { maximumDistanceDescriptiveNumber } from "./descriptiveNumberRepository/maximumDistanceDescriptiveNumber.js";
import { oneHourDescriptiveNumber } from "./descriptiveNumberRepository/duration/oneHourDescriptiveNumber.js";
import { d4MinuteDescriptiveNumber } from "./descriptiveNumberRepository/duration/d4MinuteDescriptiveNumber.js";
import { damageTakenDescriptiveNumber } from "./descriptiveNumberRepository/damageTakenDescriptiveNumber.js";
import { currentHealthDescriptiveNumber } from "./descriptiveNumberRepository/currentHealthDescriptiveNumber.js";
import { assassinDescriptiveNumber } from "./descriptiveNumberRepository/assassinDescriptiveNumber.js";
export class DescriptiveNumberFactory extends Factory {

    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new adjacentEnemiesDescriptiveNumber());
            this.items.push(new potionsDrankDescriptiveNumber());
            this.items.push(new numberOfTurnsDescriptiveNumber());
            this.items.push(new numberOfScarsDescriptiveNumber());
            this.items.push(new numberOfRalliesDescriptiveNumber());
            this.items.push(new minimumDistanceDescriptiveNumber());
            this.items.push(new maximumDistanceDescriptiveNumber());
            this.items.push(new oneHourDescriptiveNumber());
            this.items.push(new d4MinuteDescriptiveNumber());
            this.items.push(new damageTakenDescriptiveNumber());
            this.items.push(new currentHealthDescriptiveNumber());
            this.items.push(new assassinDescriptiveNumber());
        } else {
            this.items = list;
        }
    }

    public get(count: number) {
        return super.get(count) as DescriptiveNumber[];
    }

    public filter(z: (x: any) => boolean): DescriptiveNumberFactory {
        return super.filter(z) as DescriptiveNumberFactory;
    }
}