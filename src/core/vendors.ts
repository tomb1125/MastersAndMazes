import { Vendor } from "./vendor.js";

/**
 * The vendors the front end offers. Plain module-level content for now - if vendors ever
 * need to be rolled rather than picked, this becomes a vendorRepository folder plus a
 * vendorFactory registered in scripts/buildFactories.js.
 *
 * Stock is declared by typeName: the class name for a repository entry, and the row's own
 * typeName for content that lives in a table.
 */
export const BASIC_TRAINER: Vendor = new Vendor("Basic Trainer", {
    attacks: { types: ["basicAttack", "basicSpell"] }
});

export const GRAZED_TRAINER: Vendor = new Vendor("Grazed Trainer", {
    modifiers: { types: ["grazedModifier"] }
});

/**
 * Teaches no combat at all - a character trains utilities here and nothing else, which is
 * why index.ts gives it utilities at every level rather than only even ones.
 */
export const WIZARD: Vendor = new Vendor("Wizard", {
    attacks: Vendor.NOTHING,
    utilities: { types: ["wallUtility"] }
});

export const VENDORS: Vendor[] = [BASIC_TRAINER, GRAZED_TRAINER, WIZARD];
