/**
 * A Vendor is a merchant that trains a narrowed subset of the generator's content -
 * "the shop that only sells basic attacks", "the trainer that only teaches Grazed".
 *
 * It is an ambient scope rather than a container of factories. Factories are built
 * ad-hoc deep inside generation (Attack.initAlterations, buildUtilities, applyEffectModifier),
 * so a vendor cannot hand its own instances to those call sites. Instead the active
 * vendor is read by Factory.get(), the same way generation implicitly reads
 * CharacterContext and Utils.
 *
 * This module deliberately imports nothing from the domain (Attack, Modifier, ...) -
 * Factory imports Vendor, and everything imports Factory.
 */
export type ContentFilter = (x: any) => boolean;

/**
 * Declarative description of what one vendor keeps in stock for a single content slot.
 * An item is in stock if it matches ANY listed criterion; an empty descriptor stocks
 * everything.
 *
 * Kept alongside the compiled predicate so a vendor stays serialisable - the app is
 * seed-reproducible, and a shared "level 5 Wizard at this vendor" link cannot carry a
 * function.
 */
export interface VendorStock {
    types?: string[];
    names?: string[];
    where?: ContentFilter;
}

/**
 * `abilities` is shorthand for both ability slots; `attacks` and `utilities` override it
 * when a vendor stocks the two differently - a trainer that teaches no combat at all is
 * `attacks: Vendor.NOTHING`. An omitted slot stocks everything, which is why refusing to
 * stock a slot has to be said out loud.
 */
export interface VendorStockList {
    abilities?: VendorStock;
    attacks?: VendorStock;
    utilities?: VendorStock;
    modifiers?: VendorStock;
    abilityObjects?: VendorStock;
    descriptiveNumbers?: VendorStock;
}

export class Vendor {
    name: string;
    stock: VendorStockList;

    attackFilter: ContentFilter = Vendor.ALL;
    utilityFilter: ContentFilter = Vendor.ALL;
    modifierFilter: ContentFilter = Vendor.ALL;
    abilityObjectFilter: ContentFilter = Vendor.ALL;
    descriptiveNumberFilter: ContentFilter = Vendor.ALL;

    public static active: Vendor | null = null;

    public static readonly ALL: ContentFilter = () => true;

    /** Stock descriptor matching no content, for a slot a vendor deliberately refuses. */
    public static readonly NOTHING: VendorStock = { where: () => false };

    constructor(name: string, stock?: VendorStockList) {
        this.name = name;
        this.stock = stock ? stock : {};

        this.attackFilter = Vendor.compile(this.stock.attacks !== undefined
            ? this.stock.attacks : this.stock.abilities);
        this.utilityFilter = Vendor.compile(this.stock.utilities !== undefined
            ? this.stock.utilities : this.stock.abilities);
        this.modifierFilter = Vendor.compile(this.stock.modifiers);
        this.abilityObjectFilter = Vendor.compile(this.stock.abilityObjects);
        this.descriptiveNumberFilter = Vendor.compile(this.stock.descriptiveNumbers);
    }

    public train<T>(generate: () => T): T {
        const previous = Vendor.active;
        Vendor.active = this;
        try {
            return generate();
        } finally {
            Vendor.active = previous;
        }
    }

    public static compile(stock?: VendorStock): ContentFilter {
        if (!stock) {
            return Vendor.ALL;
        }

        const types = Vendor.lowercase(stock.types);
        const names = Vendor.lowercase(stock.names);

        if (types.length === 0 && names.length === 0 && !stock.where) {
            return Vendor.ALL;
        }

        return (x: any) => {
            if (stock.where && stock.where(x)) {
                return true;
            }
            if (types.length > 0 && types.includes(Vendor.typeNameOf(x))) {
                return true;
            }
            if (names.length > 0 && x && x.name != null
                && names.includes(('' + x.name).toLowerCase())) {
                return true;
            }
            return false;
        };
    }

    private static typeNameOf(x: any): string {
        if (x && x.typeName) {
            return ('' + x.typeName).toLowerCase();
        }
        return x && x.constructor ? ('' + x.constructor.name).toLowerCase() : '';
    }

    private static lowercase(values?: string[]): string[] {
        return values ? values.map(v => ('' + v).toLowerCase()) : [];
    }
}
