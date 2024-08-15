import { AffectsWeight } from "../core/affectsWeight";
import { Factory } from "../core/factory";
import { WeightedList } from "../core/weightedList";
import { AbilityObject } from "./abilityObject";
import { allAnimalsAbilityObject } from "./abilityObjectRepository/animals/allAnimalsAbilityObject";
import { birdAbilityObject } from "./abilityObjectRepository/animals/birdAbilityObject";
import { reptileAbilityObject } from "./abilityObjectRepository/animals/reptileAbilityObject";
import { catAbilityObject } from "./abilityObjectRepository/animals/catAbilityObject";
import { magicalAbilityObject } from "./abilityObjectRepository/animals/magicalAbilityObject";
import { ratAbilityObject } from "./abilityObjectRepository/animals/ratAbilityObject";
import { wildAbilityObject } from "./abilityObjectRepository/animals/wildAbilityObject";
import { gainUnderstandingAbilityObject } from "./abilityObjectRepository/symetricCommunications/gainUnderstandingAbilityObject";
import { symetricEmpathicAbilityObject } from "./abilityObjectRepository/symetricCommunications/symetricEmpathicAbilityObject";
import { symetricTelepathyAbilityObject } from "./abilityObjectRepository/symetricCommunications/symetricTelepathyAbilityObject";
import { detailedAbilityObject } from "./abilityObjectRepository/questions/detailedAbilityObject";
import { yesNoAbilityObject } from "./abilityObjectRepository/questions/yesNoAbilityObject";
import { colorfulLightAbilityObject } from "./abilityObjectRepository/light/colorofulLightAbilityObject";
import { controllableLightAbilityObject } from "./abilityObjectRepository/light/controllableLightAbilityObject";

export class AbilityObjectFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            
            //animals
            this.items.push(new allAnimalsAbilityObject());
            this.items.push(new birdAbilityObject());
            this.items.push(new catAbilityObject());
            this.items.push(new magicalAbilityObject());
            this.items.push(new reptileAbilityObject());
            this.items.push(new ratAbilityObject());
            this.items.push(new wildAbilityObject());
            
            //communications
            this.items.push(new gainUnderstandingAbilityObject());
            this.items.push(new symetricTelepathyAbilityObject());
            this.items.push(new symetricEmpathicAbilityObject());

            //questions
            this.items.push(new detailedAbilityObject())
            this.items.push(new yesNoAbilityObject())

            //light
            this.items.push(new colorfulLightAbilityObject())
            this.items.push(new controllableLightAbilityObject())

            
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