import { AffectsWeight } from "./affectsWeight";
import { Factory } from "./factory";
import { Utility } from "./utility";
import { WeightedList } from "./weightedList";

//factory imports
import { invisibilityUtility } from "./utilityRepository/wizardUtilities/invisibilityUtility";
import { skillBonusUtility } from "./utilityRepository/skillBonusUtility";
import { tumbleUtility } from "./utilityRepository/rogueUtilities/tumbleUtility";
import { shiftBlameUtility } from "./utilityRepository/rogueUtilities/shiftBlameUtility";
import { shadowStrideUtility } from "./utilityRepository/rogueUtilities/shadowStrideUtility";
import { shadowMeldUtility } from "./utilityRepository/rogueUtilities/shadowMeldUtility";
import { pickpocketUtility } from "./utilityRepository/rogueUtilities/pickpocketUtility";
import { lockpickingUtility } from "./utilityRepository/rogueUtilities/lockpickingUtility";
import { muscleTrainingUtility } from "./utilityRepository/fighterUtilities/muscleTrainingUtility";
import { lineInSandUtility } from "./utilityRepository/fighterUtilities/lineInSandUtility";
import { formationUtility } from "./utilityRepository/fighterUtilities/formationUtility";
import { equipmentMaintenanceUtility } from "./utilityRepository/fighterUtilities/equipmentMaintenanceUtility";
import { enticeRespectUtility } from "./utilityRepository/fighterUtilities/enticeRespectUtility";
import { blockUtility } from "./utilityRepository/fighterUtilities/blockUtility";
import { animalSpeak } from "./utilityRepository/druidUtilities/animalSpeak";
import { seanceUtility } from "./utilityRepository/clericUtilities/seanceUtility";
import { restorationUtility } from "./utilityRepository/clericUtilities/restorationUtility";
import { piousPrayerUtility } from "./utilityRepository/clericUtilities/piousPrayerUtility";
import { lightUtility } from "./utilityRepository/clericUtilities/lightUtility";
import { holyHealUtility } from "./utilityRepository/clericUtilities/holyHealUtility";
import { auguryUtility } from "./utilityRepository/clericUtilities/auguryUtility";
export class UtilityFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            this.items.push(new invisibilityUtility());
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