import { AffectsWeight } from "./affectsWeight.js";
import { Factory } from "./factory.js";
import { Utility } from "./utility.js";
import { WeightedList } from "./weightedList.js";

//factory imports
import { wallUtility } from "./utilityRepository/wizardUtilities/wallUtility.js";
import { invisibilityUtility } from "./utilityRepository/wizardUtilities/invisibilityUtility.js";
import { illusionUtility } from "./utilityRepository/wizardUtilities/illusionUtility.js";
import { skillBonusUtility } from "./utilityRepository/skillBonusUtility.js";
import { tumbleUtility } from "./utilityRepository/rogueUtilities/tumbleUtility.js";
import { shiftBlameUtility } from "./utilityRepository/rogueUtilities/shiftBlameUtility.js";
import { shadowStrideUtility } from "./utilityRepository/rogueUtilities/shadowStrideUtility.js";
import { shadowMeldUtility } from "./utilityRepository/rogueUtilities/shadowMeldUtility.js";
import { pickpocketUtility } from "./utilityRepository/rogueUtilities/pickpocketUtility.js";
import { lockpickingUtility } from "./utilityRepository/rogueUtilities/lockpickingUtility.js";
import { muscleTrainingUtility } from "./utilityRepository/fighterUtilities/muscleTrainingUtility.js";
import { lineInSandUtility } from "./utilityRepository/fighterUtilities/lineInSandUtility.js";
import { formationUtility } from "./utilityRepository/fighterUtilities/formationUtility.js";
import { equipmentMaintenanceUtility } from "./utilityRepository/fighterUtilities/equipmentMaintenanceUtility.js";
import { enticeRespectUtility } from "./utilityRepository/fighterUtilities/enticeRespectUtility.js";
import { blockUtility } from "./utilityRepository/fighterUtilities/blockUtility.js";
import { animalSpeak } from "./utilityRepository/druidUtilities/animalSpeak.js";
import { seanceUtility } from "./utilityRepository/clericUtilities/seanceUtility.js";
import { restorationUtility } from "./utilityRepository/clericUtilities/restorationUtility.js";
import { piousPrayerUtility } from "./utilityRepository/clericUtilities/piousPrayerUtility.js";
import { lightUtility } from "./utilityRepository/clericUtilities/lightUtility.js";
import { holyHealUtility } from "./utilityRepository/clericUtilities/holyHealUtility.js";
import { auguryUtility } from "./utilityRepository/clericUtilities/auguryUtility.js";
export class UtilityFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new wallUtility());
            this.items.push(new invisibilityUtility());
            this.items.push(new illusionUtility());
            this.items.push(new skillBonusUtility());
            this.items.push(new tumbleUtility());
            this.items.push(new shiftBlameUtility());
            this.items.push(new shadowStrideUtility());
            this.items.push(new shadowMeldUtility());
            this.items.push(new pickpocketUtility());
            this.items.push(new lockpickingUtility());
            this.items.push(new muscleTrainingUtility());
            this.items.push(new lineInSandUtility());
            this.items.push(new formationUtility());
            this.items.push(new equipmentMaintenanceUtility());
            this.items.push(new enticeRespectUtility());
            this.items.push(new blockUtility());
            this.items.push(new animalSpeak());
            this.items.push(new seanceUtility());
            this.items.push(new restorationUtility());
            this.items.push(new piousPrayerUtility());
            this.items.push(new lightUtility());
            this.items.push(new holyHealUtility());
            this.items.push(new auguryUtility());
        } else {
            this.items = list;
        }
    }

    
    public get(count: number) {
        return super.get(count) as Utility[];
    }
    
    public filter(z: (x: any) => boolean): UtilityFactory {
        return super.filter(z) as UtilityFactory;
    }
}