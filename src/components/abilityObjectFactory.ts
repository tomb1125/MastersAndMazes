import { WeightedList } from "../core/weightedList";
import { AbilityObject } from "./abilityObject";
import { allAnimalsAbilityObject } from "./abilityObjectRepository/animals/allAnimalsAbilityObject";
import { catAbilityObject } from "./abilityObjectRepository/animals/catAbilityObject";
import { gainUnderstandingAbilityObject } from "./abilityObjectRepository/symetricCommunications/gainUnderstandingAbilityObject";
import { symetricTelepathyAbilityObject } from "./abilityObjectRepository/symetricCommunications/symetricTelepathyAbilityObject";
import { DescriptiveNumber } from "./descriptiveNumber";

export class AbilityObjectFactory {
    public static get(count: number) : AbilityObject[] {
        return this.getAll().get(count) as AbilityObject[];
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