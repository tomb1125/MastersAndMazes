import { WeightedList } from "../core/weightedList";
import { allAnimalsAbilityObject } from "./abilityObjectRepository/animals/allAnimalsAbilityObject";
import { catAbilityObject } from "./abilityObjectRepository/animals/catAbilityObject";
import { gainUnderstandingAbilityObject } from "./abilityObjectRepository/communications/gainUnderstandingAbilityObject";
import { symetricTelepathyAbilityObject } from "./abilityObjectRepository/communications/symetricTelepathyAbilityObject";
import { DescriptiveNumber } from "./descriptiveNumber";

export class AbilityObjectFactory {
    public static get(count: number) : DescriptiveNumber[] {
        return this.getAll().get(count) as DescriptiveNumber[];
    }

    public static getAll(): WeightedList {
        const objs: WeightedList = new WeightedList();

        //animals
        objs.push(new allAnimalsAbilityObject());
        objs.push(new catAbilityObject());

        //communications
        objs.push(new gainUnderstandingAbilityObject());
        objs.push(new symetricTelepathyAbilityObject());

        return objs as WeightedList;
    }
}