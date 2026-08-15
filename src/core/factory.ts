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
        if(count <= 0 || !this.isSelectable(stock)) {
            return [];
        }

        return stock.get(Math.min(count, stock.items.length), this.affector);
    }

    /**
     * Declared below the constructor on purpose - scripts/buildFactories.js rewrites the
     * constructor body only, so overrides placed here survive regeneration.
     */
    protected vendorFilter(): ContentFilter {
        return Vendor.ALL;
    }

    /**
     * Whether an empty vendor stock is an answer or an accident. It is an answer for the
     * ability factories - a vendor that teaches no attacks should sell none - so they
     * override this to true. It is an accident for the component factories, which are
     * built halfway through assembling an ability that has already been committed to:
     * handing back nothing there strands callers like buildUtilities, which indexes
     * straight into the result. Those fall back to the full pool instead.
     */
    protected canSellNothing(): boolean {
        return false;
    }

    private stock(): WeightedList {
        const filtered = this.items.filter(this.vendorFilter());

        if(this.isSelectable(filtered) || this.canSellNothing()) {
            return filtered;
        }

        return this.items;
    }

    /** Whether the active vendor stocks anything this factory could actually roll. */
    public stocksAnything(): boolean {
        return this.isSelectable(Vendor.active === null ? this.items : this.stock());
    }

    private isSelectable(list: WeightedList): boolean {
        return list.items.length > 0
            && list.items.reduce((sum: number, item: HasWeigth) => sum + item.weight(this.affector), 0) > 0;
    }

    public getEvenly(count: number): HasWeigth[] {
        if(Vendor.active === null) {
            return this.items.getEven(count, this.affector);
        }

        const stock = this.stock();
        return this.isSelectable(stock) ? stock.getEven(count, this.affector) : [];
    }

    public filter(z: (x: any) => boolean): Factory {
        this.items = this.items.filter(z)
        return this;
    }
}