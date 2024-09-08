import { AffectsWeight } from "./affectsWeight";
import { HasWeigth } from "./hasWeigth";
import { WeightedList } from "./weightedList";

export class Factory {
    items: WeightedList;
    affector: AffectsWeight;

    private static EVEN_LIST_SIZE: number = 5;
    private static evenItems: HasWeigth[];

    constructor(affector: AffectsWeight) {
        this.affector = affector;
        Factory.evenItems = [];
    }
    public getAll(): WeightedList {
        return this.items;
    }

    public get(count: number): HasWeigth[] {
        return this.items.get(count, this.affector);
    }

    public getEvenly(count: number): HasWeigth[] { //TODO fix or rework
        if(Factory.evenItems.length == 0) {
            Factory.evenItems = this.get(Factory.EVEN_LIST_SIZE);
        }
        console.log(Factory.evenItems.length);

        const index = 0;
        const newItem: HasWeigth = Factory.evenItems[index]
        Factory.evenItems.splice(index, 1);

        if(count == 0) {
            return [];
        }

        if(count == 1) {
            return [newItem];
        }

        return [newItem, ...this.getEvenly(count - 1)];
    }

    public filter(z: (x: any) => boolean): Factory {
        this.items = this.items.filter(z)
        return this;
    }
}