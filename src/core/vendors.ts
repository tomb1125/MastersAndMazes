import { Vendor } from "./vendor.js";

/**
 * The vendors the front end offers. Plain module-level content for now - if vendors ever
 * need to be rolled rather than picked, this becomes a vendorRepository folder plus a
 * vendorFactory registered in scripts/buildFactories.js.
 *
 * Stock is declared by class name, which is how the repository files are named.
 */
export const BASIC_TRAINER: Vendor = new Vendor("Basic Trainer", {
    abilities: { types: ["basicAttack", "basicSpell"] }
});

export const GRAZED_TRAINER: Vendor = new Vendor("Grazed Trainer", {
    modifiers: { types: ["grazedModifier"] }
});

export const VENDORS: Vendor[] = [BASIC_TRAINER, GRAZED_TRAINER];
