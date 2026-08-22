import { Vendor } from "./vendor.js";

/**
 * The vendors the front end offers. Plain module-level content for now - if vendors ever
 * need to be rolled rather than picked, this becomes a vendorRepository folder plus a
 * vendorFactory registered in scripts/buildFactories.js.
 *
 * Stock is declared by subtype where a whole table belongs to the vendor, and by typeName -
 * the class name for a repository entry, the row's own typeName for a table row - where it
 * takes single pieces of content out of a shared pool.
 *
 * A vendor's stock is the only thing deciding which kind of ability it teaches, so a trainer
 * that means attacks has to refuse utilities out loud - an omitted slot stocks everything.
 */
export const BASIC_TRAINER: Vendor = new Vendor("Basic Trainer", {
    attacks: { types: ["basicAttack", "basicSpell"] },
    utilities: Vendor.NOTHING
});

/** Both ability slots are deliberately open - Grazed is a constraint either kind can carry. */
export const GRAZED_TRAINER: Vendor = new Vendor("Grazed Trainer", {
    modifiers: { types: ["grazedModifier"] }
});

/**
 * A class vendor: it sells one authored spell list, taught with the numbers its author
 * wrote, which is what Vendor.NO_ALTERATIONS buys. Nothing about the content is class-aware -
 * the rows are ordinary table rows carrying a subtype, and this stock list is the only thing
 * tying that subtype to a wizard.
 */
export const WIZARD: Vendor = new Vendor("Wizard", {
    abilities: { subtypes: ["wizard"] }
}, Vendor.NO_ALTERATIONS);

export const FIGHTER: Vendor = new Vendor("Fighter", {
    abilities: { subtypes: ["fighter"] }
}, Vendor.NO_ALTERATIONS);

export const VENDORS: Vendor[] = [BASIC_TRAINER, GRAZED_TRAINER, WIZARD, FIGHTER];
