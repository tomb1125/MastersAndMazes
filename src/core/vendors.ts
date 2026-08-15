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
 * Stocks no attacks, which is what makes it the worked example of Vendor.NOTHING and of
 * index.ts teaching the other kind at every level. That is a demonstration and not a
 * statement that a class sells no combat - this vendor gains an attacks stock once it has
 * a spell list worth selling.
 */
export const WIZARD: Vendor = new Vendor("Wizard", {
    attacks: Vendor.NOTHING,
    utilities: { types: ["wallUtility"] }
});

export const VENDORS: Vendor[] = [BASIC_TRAINER, GRAZED_TRAINER, WIZARD];
