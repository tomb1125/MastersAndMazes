import { WeightedList } from "../core/weightedList";
import { allAnimalsAbilityObject } from "./abilityObjectRepository/allAnimalsAbilityObject";
import { DescriptiveNumber } from "./descriptiveNumber";

export class AbilityObjectFactory {
    public static get(count: number) : DescriptiveNumber[] {
        return this.getAll().get(count) as DescriptiveNumber[];
    }

    public static getAll(): WeightedList {
        const objs: WeightedList = new WeightedList();

        objs.push(new allAnimalsAbilityObject());

        return objs as WeightedList;
    }
}