import { AffectsWeight } from "./affectsWeight";
import { HasWeigth } from "./hasWeigth";
import { WeightedList } from "./weightedList";

export class Factory {
    items: WeightedList;
    affector: AffectsWeight;

    constructor(affector: AffectsWeight) {
        this.affector = affector;
    }
    public getAll(): WeightedList {
        return this.items;
    }

    public get(count: number): HasWeigth[] {
        return this.items.get(count, this.affector);
    }

    public filter(z: (x: any) => boolean): Factory {
        this.items = this.items.filter(z)
        return this;
    }
}