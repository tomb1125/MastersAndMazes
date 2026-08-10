import { WeightedList } from "../core/weightedList.js";
import { DescriptiveNumber } from "./descriptiveNumber.js";
import { Factory } from "../core/factory.js";
import { AffectsWeight } from "../core/affectsWeight.js";
//factory imports
import { currentHealthDescriptiveNumber } from "./descriptiveNumberRepository/currentHealthDescriptiveNumber.js";
export class DescriptiveNumberFactory extends Factory {

    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new currentHealthDescriptiveNumber());
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