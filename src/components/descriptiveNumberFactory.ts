import { WeightedList } from "../core/weightedList";
import { DescriptiveNumber } from "./descriptiveNumber";
import { Factory } from "../core/factory";
import { AffectsWeight } from "../core/affectsWeight";
//factory imports
import { adjacentEnemiesDescriptiveNumber } from "./descriptiveNumberRepository/small/adjacentEnemiesDescriptiveNumber";
import { numberOfTurnsDescriptiveNumber } from "./descriptiveNumberRepository/numberOfTurnsDescriptiveNumber";
import { numberOfScarsDescriptiveNumber } from "./descriptiveNumberRepository/numberOfScarsDescriptiveNumber";
import { oneHourDescriptiveNumber } from "./descriptiveNumberRepository/duration/oneHourDescriptiveNumber";
import { d4MinuteDescriptiveNumber } from "./descriptiveNumberRepository/duration/d4MinuteDescriptiveNumber";
import { damageTakenDescriptiveNumber } from "./descriptiveNumberRepository/damageTakenDescriptiveNumber";
import { currentHealthDescriptiveNumber } from "./descriptiveNumberRepository/currentHealthDescriptiveNumber";
import { assassinDescriptiveNumber } from "./descriptiveNumberRepository/assassinDescriptiveNumber";
export class DescriptiveNumberFactory extends Factory {

    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new adjacentEnemiesDescriptiveNumber());
            this.items.push(new numberOfTurnsDescriptiveNumber());
            this.items.push(new numberOfScarsDescriptiveNumber());
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