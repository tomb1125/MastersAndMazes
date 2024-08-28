import { AffectsWeight } from "./affectsWeight";
import { Factory } from "./factory";
import { Utility } from "./utility";
import { AnimalSpeak } from "./utilityRepository/druidUtilities/animalSpeak";
import { Augury } from "./utilityRepository/clericUtilities/auguryUtility";
import { WeightedList } from "./weightedList";
import { Light } from "./utilityRepository/clericUtilities/lightUtility";
import { RestorationUtility } from "./utilityRepository/clericUtilities/restorationUtility";
import { SkillBonusUtility } from "./utilityRepository/skillBonusUtility";
import { SeanceUtility } from "./utilityRepository/clericUtilities/seanceUtility";
import { HolyHealUtility } from "./utilityRepository/clericUtilities/holyHealUtility";
import { PickpocketingUtility } from "./utilityRepository/rogueUtilities/pickpocketUtility";
import { ShadowStrideUtility } from "./utilityRepository/rogueUtilities/shadowStrideUtility";

export class UtilityFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            
            this.items.push(new AnimalSpeak());

            //cleric
            this.items.push(new Augury());
            this.items.push(new Light());
            this.items.push(new RestorationUtility());
            this.items.push(new SeanceUtility());
            this.items.push(new HolyHealUtility());

            //rogue
            this.items.push(new PickpocketingUtility());
            this.items.push(new ShadowStrideUtility());

            //common
            this.items.push(new SkillBonusUtility())
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