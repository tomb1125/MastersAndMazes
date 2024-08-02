import { Utility } from "./utility";
import { AnimalSpeak } from "./utilityRepository/animalSpeak";
import { WeightedList } from "./weightedList";

export class UtilityFactory {
    
    public static get(count: number) : Utility[] {
        return this.getAll().get(count) as Utility[];
    }

    public static getAll(): WeightedList {

        const utls: WeightedList = new WeightedList();
        utls.push(new AnimalSpeak());

        return utls as WeightedList;
    }
}