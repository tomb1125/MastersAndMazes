import { AffectsWeight } from "./affectsWeight";
import { Factory } from "./factory";
import { Utility } from "./utility";
import { AnimalSpeak } from "./utilityRepository/animalSpeak";
import { WeightedList } from "./weightedList";

export class UtilityFactory extends Factory {
    constructor(affector: AffectsWeight, list?: WeightedList) {
        super(affector);
        if(list === undefined) {
            this.items = new WeightedList();
            
            //animals
            this.items.push(new AnimalSpeak());


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