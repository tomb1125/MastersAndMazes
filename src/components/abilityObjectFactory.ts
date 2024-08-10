import { AffectsWeight } from "../core/affectsWeight";
import { Factory } from "../core/factory";
import { WeightedList } from "../core/weightedList";
import { AbilityObject } from "./abilityObject";
import { allAnimalsAbilityObject } from "./abilityObjectRepository/animals/allAnimalsAbilityObject";
import { catAbilityObject } from "./abilityObjectRepository/animals/catAbilityObject";
import { gainUnderstandingAbilityObject } from "./abilityObjectRepository/symetricCommunications/gainUnderstandingAbilityObject";
import { symetricTelepathyAbilityObject } from "./abilityObjectRepository/symetricCommunications/symetricTelepathyAbilityObject";
import { DescriptiveNumber } from "./descriptiveNumber";

export class AbilityObjectFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            
            //animals
            this.items.push(new allAnimalsAbilityObject());
            this.items.push(new catAbilityObject());

            //communications
            this.items.push(new gainUnderstandingAbilityObject());
            this.items.push(new symetricTelepathyAbilityObject());


        } else {
            this.items = list;
        }
    }

    
    public get(count: number) {
        return super.get(count) as AbilityObject[];
    }

    public filter(z: (x: any) => boolean): AbilityObjectFactory {
        return super.filter(z) as AbilityObjectFactory;
    }
}