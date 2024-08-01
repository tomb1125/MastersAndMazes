import { WeightedList } from "../core/weightedList";
import { allAnimalsAbilityObject } from "./abilityObjectRepository/animals/allAnimalsAbilityObject";
import { catAbilityObject } from "./abilityObjectRepository/animals/catAbilityObject";
import { DescriptiveNumber } from "./descriptiveNumber";

export class AbilityObjectFactory {
    public static get(count: number) : DescriptiveNumber[] {
        return this.getAll().get(count) as DescriptiveNumber[];
    }

    public static getAll(): WeightedList {
        const objs: WeightedList = new WeightedList();

        objs.push(new allAnimalsAbilityObject());
        objs.push(new catAbilityObject());

        return objs as WeightedList;
    }
}