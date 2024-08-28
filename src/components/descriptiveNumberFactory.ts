import { Utils } from "../core/utils";
import { WeightedList } from "../core/weightedList";
import { DescriptiveNumber } from "./descriptiveNumber";
import { adjacentEnemiesDescriptiveNumber } from "./descriptiveNumberRepository/small/adjacentEnemiesDescriptiveNumber";
import { assassinDescriptiveNumber } from "./descriptiveNumberRepository/assassinDescriptiveNumber";
import { currentHealthDescriptiveNumber } from "./descriptiveNumberRepository/currentHealthDescriptiveNumber";
import { d4MinuteDescriptiveNumber } from "./descriptiveNumberRepository/duration/d4MinuteDescriptiveNumber";
import { oneHourDescriptiveNumber } from "./descriptiveNumberRepository/duration/aneHourDescriptiveNumber";
import { numberOfTurnsDescriptiveNumber } from "./descriptiveNumberRepository/numberOfTurnsDescriptiveNumber";
import { damageTakenDescriptiveNumber } from "./descriptiveNumberRepository/damageTakenDescriptiveNumber";
import { Factory } from "../core/factory";
import { AffectsWeight } from "../core/affectsWeight";
import { numberOfScarsDescriptiveNumber } from "./descriptiveNumberRepository/numberOfScarsDescriptiveNumber";

export class DescriptiveNumberFactory extends Factory {

    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            
            //small
            this.items.push(new adjacentEnemiesDescriptiveNumber());

            //common
            this.items.push(new assassinDescriptiveNumber());
            this.items.push(new currentHealthDescriptiveNumber());
            this.items.push(new damageTakenDescriptiveNumber());
            this.items.push(new numberOfScarsDescriptiveNumber());
            this.items.push(new numberOfTurnsDescriptiveNumber());

            //duration
            this.items.push(new d4MinuteDescriptiveNumber());
            this.items.push(new oneHourDescriptiveNumber());
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