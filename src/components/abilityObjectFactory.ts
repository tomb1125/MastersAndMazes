import { AffectsWeight } from "../core/affectsWeight";
import { Factory } from "../core/factory";
import { WeightedList } from "../core/weightedList";
import { AbilityObject } from "./abilityObject";

//factory imports
import { symetricTelepathyAbilityObject } from "./abilityObjectRepository/symetricCommunications/symetricTelepathyAbilityObject";
import { symetricEmpathicAbilityObject } from "./abilityObjectRepository/symetricCommunications/symetricEmpathicAbilityObject";
import { gainUnderstandingAbilityObject } from "./abilityObjectRepository/symetricCommunications/gainUnderstandingAbilityObject";
import { dreamConnectionAbilityObject } from "./abilityObjectRepository/symetricCommunications/dreamConnectionAbilityObject";
import { shadowStealthAbilityObject } from "./abilityObjectRepository/stealth/shadowStealthAbilityObject";
import { prowlingStealthAbilityObject } from "./abilityObjectRepository/stealth/prowlingStealthAbilityObject";
import { potionStealthAbilityObject } from "./abilityObjectRepository/stealth/potionStealthAbilityObject";
import { harmlessStealthAbilityObject } from "./abilityObjectRepository/stealth/harmlessStealthAbilityObject";
import { yesNoAbilityObject } from "./abilityObjectRepository/questions/yesNoAbilityObject";
import { oneWordAbilityObject } from "./abilityObjectRepository/questions/oneWordAbilityObject";
import { noeDetailedAbilityObject } from "./abilityObjectRepository/questions/noeDetailedAbilityObject";
import { detailedAbilityObject } from "./abilityObjectRepository/questions/detailedAbilityObject";
import { warriorHumanoidAbilityObject } from "./abilityObjectRepository/persons/warriorHumanoidAbilityObject";
import { scumHumanoidAbilityObject } from "./abilityObjectRepository/persons/scumHumanoidAbilityObject";
import { mageHumanoidAbilityObject } from "./abilityObjectRepository/persons/mageHumanoidAbilityObject";
import { humanoidAbilityObject } from "./abilityObjectRepository/persons/humanoidAbilityObject";
import { distractedHumanoidAbilityObject } from "./abilityObjectRepository/persons/distractedHumanoidAbilityObject";
import { straightMovementAbilityObject } from "./abilityObjectRepository/movements/straightMovementAbilityObject";
import { normalMovementAbilityObject } from "./abilityObjectRepository/movements/normalMovementAbilityObject";
import { chargeMovementAbilityObject } from "./abilityObjectRepository/movements/chargeMovementAbilityObject";
import { blinkMovementAbilityObject } from "./abilityObjectRepository/movements/blinkMovementAbilityObject";
import { agileMovementAbilityObject } from "./abilityObjectRepository/movements/agileMovementAbilityObject";
import { revealingLightAbilityObject } from "./abilityObjectRepository/light/revealingLightAbilityObject";
import { controllableLightAbilityObject } from "./abilityObjectRepository/light/controllableLightAbilityObject";
import { colorfulLightAbilityObject } from "./abilityObjectRepository/light/colorfulLightAbilityObject";
import { blindingLightAbilityObject } from "./abilityObjectRepository/light/blindingLightAbilityObject";
import { warriorCorpseAbilityObject } from "./abilityObjectRepository/corpses/warriorCorpseAbilityObject";
import { unfinishedBusinessAbilityObject } from "./abilityObjectRepository/corpses/unfinishedBusinessAbilityObject";
import { soulStealingAbilityObject } from "./abilityObjectRepository/corpses/soulStealingAbilityObject";
import { skeletonAbilityObject } from "./abilityObjectRepository/corpses/skeletonAbilityObject";
import { humanoidCorpseAbilityObject } from "./abilityObjectRepository/corpses/humanoidCorpseAbilityObject";
import { freshCorpseAbilityObject } from "./abilityObjectRepository/corpses/freshCorpseAbilityObject";
import { wildAbilityObject } from "./abilityObjectRepository/animals/wildAbilityObject";
import { reptileAbilityObject } from "./abilityObjectRepository/animals/reptileAbilityObject";
import { ratAbilityObject } from "./abilityObjectRepository/animals/ratAbilityObject";
import { magicalAbilityObject } from "./abilityObjectRepository/animals/magicalAbilityObject";
import { catAbilityObject } from "./abilityObjectRepository/animals/catAbilityObject";
import { birdAbilityObject } from "./abilityObjectRepository/animals/birdAbilityObject";
import { allAnimalsAbilityObject } from "./abilityObjectRepository/animals/allAnimalsAbilityObject";
export class AbilityObjectFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new symetricTelepathyAbilityObject());
            this.items.push(new symetricEmpathicAbilityObject());
            this.items.push(new gainUnderstandingAbilityObject());
            this.items.push(new dreamConnectionAbilityObject());
            this.items.push(new shadowStealthAbilityObject());
            this.items.push(new prowlingStealthAbilityObject());
            this.items.push(new potionStealthAbilityObject());
            this.items.push(new harmlessStealthAbilityObject());
            this.items.push(new yesNoAbilityObject());
            this.items.push(new oneWordAbilityObject());
            this.items.push(new noeDetailedAbilityObject());
            this.items.push(new detailedAbilityObject());
            this.items.push(new warriorHumanoidAbilityObject());
            this.items.push(new scumHumanoidAbilityObject());
            this.items.push(new mageHumanoidAbilityObject());
            this.items.push(new humanoidAbilityObject());
            this.items.push(new distractedHumanoidAbilityObject());
            this.items.push(new straightMovementAbilityObject());
            this.items.push(new normalMovementAbilityObject());
            this.items.push(new chargeMovementAbilityObject());
            this.items.push(new blinkMovementAbilityObject());
            this.items.push(new agileMovementAbilityObject());
            this.items.push(new revealingLightAbilityObject());
            this.items.push(new controllableLightAbilityObject());
            this.items.push(new colorfulLightAbilityObject());
            this.items.push(new blindingLightAbilityObject());
            this.items.push(new warriorCorpseAbilityObject());
            this.items.push(new unfinishedBusinessAbilityObject());
            this.items.push(new soulStealingAbilityObject());
            this.items.push(new skeletonAbilityObject());
            this.items.push(new humanoidCorpseAbilityObject());
            this.items.push(new freshCorpseAbilityObject());
            this.items.push(new wildAbilityObject());
            this.items.push(new reptileAbilityObject());
            this.items.push(new ratAbilityObject());
            this.items.push(new magicalAbilityObject());
            this.items.push(new catAbilityObject());
            this.items.push(new birdAbilityObject());
            this.items.push(new allAnimalsAbilityObject());
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