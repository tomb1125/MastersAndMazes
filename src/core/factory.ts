import { AffectsWeight } from "./affectsWeight.js";
import { HasWeigth } from "./hasWeigth.js";
import { ContentFilter, Vendor } from "./vendor.js";
import { WeightedList } from "./weightedList.js";

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
        if(Vendor.active === null) {
            return this.items.get(count, this.affector);
        }

        // A vendor sells less than the world holds, so asking for more than it stocks is
        // expected rather than an authoring error - clamp instead of letting WeightedList
        // throw. Outside a vendor the throw is left in place.
        const stock = this.stock();
        if(count <= 0 || stock.items.length === 0) {
            return [];
        }

        return stock.get(Math.min(count, stock.items.length), this.affector);
    }

    /**
     * The slot of the active vendor's stock this factory draws from. Overridden by every
     * factory that a vendor can narrow; the default sells the whole repository.
     *
     * Declared below the constructor on purpose - scripts/buildFactories.js rewrites the
     * constructor body only, so overrides placed here survive regeneration.
     */
    protected vendorFilter(): ContentFilter {
        return Vendor.ALL;
    }

    /** The item pool as narrowed by the active vendor. */
    private stock(): WeightedList {
        const filtered = this.items.filter(this.vendorFilter());

        // Stock that is empty, or that only holds items the class cannot roll (weight 0),
        // would throw out of WeightedList. Fall back to the unnarrowed pool so a vendor
        // and class combination can never break generation.
        return this.isSelectable(filtered) ? filtered : this.items;
    }

    private isSelectable(list: WeightedList): boolean {
        return list.items.length > 0
            && list.items.reduce((sum: number, item: HasWeigth) => sum + item.weight(this.affector), 0) > 0;
    }

    /**
     * Draws count items spread evenly across the repository, refilling once it is
     * exhausted - so unlike get() this works on a repository smaller than count, down to
     * a single item. Honours the active vendor's stock.
     */
    public getEvenly(count: number): HasWeigth[] {
        const pool = Vendor.active === null ? this.items : this.stock();
        return pool.getEven(count, this.affector);
    }

    public filter(z: (x: any) => boolean): Factory {
        this.items = this.items.filter(z)
        return this;
    }
}