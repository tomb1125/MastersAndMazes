/**
 * A Vendor is a merchant that trains a narrowed subset of the generator's content -
 * "the shop that only sells basic attacks", "the trainer that only teaches Grazed".
 *
 * It is an ambient scope rather than a container of factories. Factories are built
 * ad-hoc deep inside generation (Attack.initModifiers, wallUtility, applyEffectModifier),
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
    /** Class names, e.g. 'grazedModifier'. Matched case-insensitively. */
    types?: string[];
    /** Display names, e.g. 'Grazed'. Matched case-insensitively. */
    names?: string[];
    /** Escape hatch for stock that is not expressible as a name list. */
    where?: ContentFilter;
}

export interface VendorStockList {
    /** Applied to both AttackFactory and UtilityFactory. */
    abilities?: VendorStock;
    modifiers?: VendorStock;
    abilityObjects?: VendorStock;
    descriptiveNumbers?: VendorStock;
}

export class Vendor {
    name: string;
    stock: VendorStockList;

    abilityFilter: ContentFilter = Vendor.ALL;
    modifierFilter: ContentFilter = Vendor.ALL;
    abilityObjectFilter: ContentFilter = Vendor.ALL;
    descriptiveNumberFilter: ContentFilter = Vendor.ALL;

    /** The vendor generation is currently running under, or null for the open world. */
    public static active: Vendor | null = null;

    public static readonly ALL: ContentFilter = () => true;

    constructor(name: string, stock?: VendorStockList) {
        this.name = name;
        this.stock = stock ? stock : {};

        this.abilityFilter = Vendor.compile(this.stock.abilities);
        this.modifierFilter = Vendor.compile(this.stock.modifiers);
        this.abilityObjectFilter = Vendor.compile(this.stock.abilityObjects);
        this.descriptiveNumberFilter = Vendor.compile(this.stock.descriptiveNumbers);
    }

    /**
     * Runs generation with this vendor active. Restores the previous vendor afterwards,
     * so nesting and thrown errors cannot leave the scope stuck open.
     *
     *   const attacks = basicTrainer.train(() => new AttackFactory(new Ability()).get(2));
     */
    public train<T>(generate: () => T): T {
        const previous = Vendor.active;
        Vendor.active = this;
        try {
            return generate();
        } finally {
            Vendor.active = previous;
        }
    }

    /**
     * Turns a stock descriptor into the predicate Factory consumes. Class names come from
     * constructor.name, which is reliable here because there is no bundler and therefore
     * no minification.
     */
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
            if (types.length > 0 && x && x.constructor
                && types.includes(('' + x.constructor.name).toLowerCase())) {
                return true;
            }
            if (names.length > 0 && x && x.name != null
                && names.includes(('' + x.name).toLowerCase())) {
                return true;
            }
            return false;
        };
    }

    private static lowercase(values?: string[]): string[] {
        return values ? values.map(v => ('' + v).toLowerCase()) : [];
    }
}
