import { AffectsWeight } from "../core/affectsWeight.js";
import { Factory } from "../core/factory.js";
import { WeightedList } from "../core/weightedList.js";
import { AbilityObject } from "./abilityObject.js";

//factory imports
import { teachingTrainingAbilityObject } from "./abilityObjectRepository/training/teachingTrainingAbilityObject.js";
import { rigidTrainingAbilityObject } from "./abilityObjectRepository/training/rigidTrainingAbilityObject.js";
import { normalTrainingAbilityObject } from "./abilityObjectRepository/training/normalTrainingAbilityObject.js";
import { casualTrainingAbilityObject } from "./abilityObjectRepository/training/casualTrainingAbilityObject.js";
import { symetricTelepathyAbilityObject } from "./abilityObjectRepository/symetricCommunications/symetricTelepathyAbilityObject.js";
import { symetricEmpathicAbilityObject } from "./abilityObjectRepository/symetricCommunications/symetricEmpathicAbilityObject.js";
import { gainUnderstandingAbilityObject } from "./abilityObjectRepository/symetricCommunications/gainUnderstandingAbilityObject.js";
import { dreamConnectionAbilityObject } from "./abilityObjectRepository/symetricCommunications/dreamConnectionAbilityObject.js";
import { shadowStealthAbilityObject } from "./abilityObjectRepository/stealth/shadowStealthAbilityObject.js";
import { prowlingStealthAbilityObject } from "./abilityObjectRepository/stealth/prowlingStealthAbilityObject.js";
import { potionStealthAbilityObject } from "./abilityObjectRepository/stealth/potionStealthAbilityObject.js";
import { harmlessStealthAbilityObject } from "./abilityObjectRepository/stealth/harmlessStealthAbilityObject.js";
import { yesNoAbilityObject } from "./abilityObjectRepository/questions/yesNoAbilityObject.js";
import { oneWordAbilityObject } from "./abilityObjectRepository/questions/oneWordAbilityObject.js";
import { noeDetailedAbilityObject } from "./abilityObjectRepository/questions/noeDetailedAbilityObject.js";
import { detailedAbilityObject } from "./abilityObjectRepository/questions/detailedAbilityObject.js";
import { warriorHumanoidAbilityObject } from "./abilityObjectRepository/persons/warriorHumanoidAbilityObject.js";
import { scumHumanoidAbilityObject } from "./abilityObjectRepository/persons/scumHumanoidAbilityObject.js";
import { mageHumanoidAbilityObject } from "./abilityObjectRepository/persons/mageHumanoidAbilityObject.js";
import { humanoidAbilityObject } from "./abilityObjectRepository/persons/humanoidAbilityObject.js";
import { distractedHumanoidAbilityObject } from "./abilityObjectRepository/persons/distractedHumanoidAbilityObject.js";
import { straightMovementAbilityObject } from "./abilityObjectRepository/movements/straightMovementAbilityObject.js";
import { normalMovementAbilityObject } from "./abilityObjectRepository/movements/normalMovementAbilityObject.js";
import { chargeMovementAbilityObject } from "./abilityObjectRepository/movements/chargeMovementAbilityObject.js";
import { blinkMovementAbilityObject } from "./abilityObjectRepository/movements/blinkMovementAbilityObject.js";
import { agileMovementAbilityObject } from "./abilityObjectRepository/movements/agileMovementAbilityObject.js";
import { revealingLightAbilityObject } from "./abilityObjectRepository/light/revealingLightAbilityObject.js";
import { controllableLightAbilityObject } from "./abilityObjectRepository/light/controllableLightAbilityObject.js";
import { colorfulLightAbilityObject } from "./abilityObjectRepository/light/colorfulLightAbilityObject.js";
import { blindingLightAbilityObject } from "./abilityObjectRepository/light/blindingLightAbilityObject.js";
import { stillIllussionAbilityObject } from "./abilityObjectRepository/illusions/stillIllussionAbilityObject.js";
import { soundIllussionAbilityObject } from "./abilityObjectRepository/illusions/soundIllussionAbilityObject.js";
import { shadowyIllussionAbilityObject } from "./abilityObjectRepository/illusions/shadowyIllussionAbilityObject.js";
import { perfectIllussionAbilityObject } from "./abilityObjectRepository/illusions/perfectIllussionAbilityObject.js";
import { detailedIllussionAbilityObject } from "./abilityObjectRepository/illusions/detailedIllussionAbilityObject.js";
import { commonIllussionAbilityObject } from "./abilityObjectRepository/illusions/commonIllussionAbilityObject.js";
import { warriorCorpseAbilityObject } from "./abilityObjectRepository/corpses/warriorCorpseAbilityObject.js";
import { unfinishedBusinessAbilityObject } from "./abilityObjectRepository/corpses/unfinishedBusinessAbilityObject.js";
import { soulStealingAbilityObject } from "./abilityObjectRepository/corpses/soulStealingAbilityObject.js";
import { skeletonAbilityObject } from "./abilityObjectRepository/corpses/skeletonAbilityObject.js";
import { humanoidCorpseAbilityObject } from "./abilityObjectRepository/corpses/humanoidCorpseAbilityObject.js";
import { freshCorpseAbilityObject } from "./abilityObjectRepository/corpses/freshCorpseAbilityObject.js";
import { stoneMaterialAbilityObject } from "./abilityObjectRepository/bulkMaterials/stoneMaterialAbilityObject.js";
import { paperMaterialAbilityObject } from "./abilityObjectRepository/bulkMaterials/paperMaterialAbilityObject.js";
import { forceMaterialAbilityObject } from "./abilityObjectRepository/bulkMaterials/forceMaterialAbilityObject.js";
import { brickMaterialAbilityObject } from "./abilityObjectRepository/bulkMaterials/brickMaterialAbilityObject.js";
import { wildAbilityObject } from "./abilityObjectRepository/animals/wildAbilityObject.js";
import { reptileAbilityObject } from "./abilityObjectRepository/animals/reptileAbilityObject.js";
import { ratAbilityObject } from "./abilityObjectRepository/animals/ratAbilityObject.js";
import { magicalAbilityObject } from "./abilityObjectRepository/animals/magicalAbilityObject.js";
import { catAbilityObject } from "./abilityObjectRepository/animals/catAbilityObject.js";
import { birdAbilityObject } from "./abilityObjectRepository/animals/birdAbilityObject.js";
import { allAnimalsAbilityObject } from "./abilityObjectRepository/animals/allAnimalsAbilityObject.js";
export class AbilityObjectFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new teachingTrainingAbilityObject());
            this.items.push(new rigidTrainingAbilityObject());
            this.items.push(new normalTrainingAbilityObject());
            this.items.push(new casualTrainingAbilityObject());
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
            this.items.push(new stillIllussionAbilityObject());
            this.items.push(new soundIllussionAbilityObject());
            this.items.push(new shadowyIllussionAbilityObject());
            this.items.push(new perfectIllussionAbilityObject());
            this.items.push(new detailedIllussionAbilityObject());
            this.items.push(new commonIllussionAbilityObject());
            this.items.push(new warriorCorpseAbilityObject());
            this.items.push(new unfinishedBusinessAbilityObject());
            this.items.push(new soulStealingAbilityObject());
            this.items.push(new skeletonAbilityObject());
            this.items.push(new humanoidCorpseAbilityObject());
            this.items.push(new freshCorpseAbilityObject());
            this.items.push(new stoneMaterialAbilityObject());
            this.items.push(new paperMaterialAbilityObject());
            this.items.push(new forceMaterialAbilityObject());
            this.items.push(new brickMaterialAbilityObject());
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