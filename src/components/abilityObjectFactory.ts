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
import { oneWordAbilityObject } from "./abilityObjectRepository/questions/oneWordAbilityObject";
import { revealingLightAbilityObject } from "./abilityObjectRepository/light/revealingLightAbilityObject";
import { noeDetailedAbilityObject } from "./abilityObjectRepository/questions/noeDetailedAbilityObject";
import { dreamConnectingAbilityObject } from "./abilityObjectRepository/symetricCommunications/dreamConnectionAbilityObject";
import { humanoidCorpseAbilityObject } from "./abilityObjectRepository/corpses/humanoidCorpseAbilityObject";
import { skeletonAbilityObject } from "./abilityObjectRepository/corpses/skeletonAbilityObject";
import { warriorCorpseAbilityObject } from "./abilityObjectRepository/corpses/warriorAbilityObject";
import { unfinishedBusinessAbilityObject } from "./abilityObjectRepository/corpses/unfinishedBusinessAbilityObject";
import { freshCorpseAbilityObject } from "./abilityObjectRepository/corpses/freshCorpseAbilityObject";
import { humanoidAbilityObject } from "./abilityObjectRepository/persons/humanoidAbilityObject";
import { distractedHumanoidAbilityObject } from "./abilityObjectRepository/persons/distractedHumanoidAbilityObject";
import { mageHumanoidAbilityObject } from "./abilityObjectRepository/persons/mageHumanoidAbilityObject";
import { shadowStealthAbilityObject } from "./abilityObjectRepository/stealth/shadowStealthAbilityObject";
import { unarmoredStealthAbilityObject } from "./abilityObjectRepository/stealth/unarmoredStealthAbilityObject";
import { potionStealthAbilityObject } from "./abilityObjectRepository/stealth/potionStealthAbilityObject";

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
            this.items.push(new dreamConnectingAbilityObject());

            //corpse
            this.items.push(new humanoidCorpseAbilityObject());
            this.items.push(new freshCorpseAbilityObject());
            this.items.push(new skeletonAbilityObject());
            this.items.push(new warriorCorpseAbilityObject());
            this.items.push(new unfinishedBusinessAbilityObject());

            //questions
            this.items.push(new detailedAbilityObject())
            this.items.push(new yesNoAbilityObject())
            this.items.push(new oneWordAbilityObject())
            this.items.push(new noeDetailedAbilityObject())

            //light
            this.items.push(new colorfulLightAbilityObject())
            this.items.push(new controllableLightAbilityObject())
            this.items.push(new revealingLightAbilityObject())

            //persons
            this.items.push(new humanoidAbilityObject())
            this.items.push(new distractedHumanoidAbilityObject())
            this.items.push(new mageHumanoidAbilityObject())

            //stealth
            this.items.push(new shadowStealthAbilityObject());
            this.items.push(new unarmoredStealthAbilityObject());
            this.items.push(new potionStealthAbilityObject());
            
            

            
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