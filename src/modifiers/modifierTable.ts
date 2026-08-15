import { AffectsWeight } from "../core/affectsWeight.js";
import { CanAffectModifier } from "../core/canAffectModifier.js";
import { Modifier } from "./modifier.js";

// A row literal is evaluated when its table module loads, and the modifier tables load
// while Utils is still loading (Utils imports ModifierFactory, which imports them) - so a
// row reads a Utils or CharacterContext constant inside one of its functions, never in the
// literal, where it would read undefined.
export interface ModifierRow {
    typeName: string;
    name: string;
    namePrefix?: string;
    description?: string;
    longDescription?: string;
    chance?: number;
    weight?: (x?: AffectsWeight) => number;
    powerBonus?: (x: CanAffectModifier) => number;
    powerMultiplier?: (x: CanAffectModifier) => number;
}

export function buildModifiers(
    rows: ModifierRow[],
    categorise?: (modifier: Modifier) => void): Modifier[] {

    return rows.map(row => {
        const modifier = applyModifierRow(new Modifier(), row);

        if(categorise) {
            categorise(modifier);
        }

        return modifier;
    });
}

export function applyModifierRow<T extends Modifier>(modifier: T, row: ModifierRow): T {
    modifier.typeName = row.typeName;
    modifier.name = row.name;

    if(row.namePrefix !== undefined) {
        modifier.namePrefix = row.namePrefix;
    }
    if(row.description !== undefined) {
        modifier.description = row.description;
    }
    if(row.longDescription !== undefined) {
        modifier.longDescription = row.longDescription;
    }
    if(row.chance !== undefined) {
        modifier.chance = row.chance;
    }
    if(row.weight) {
        modifier.weight = row.weight;
    }
    if(row.powerBonus) {
        modifier.powerBonus = row.powerBonus;
    }
    if(row.powerMultiplier) {
        modifier.powerMultiplier = row.powerMultiplier;
    }

    return modifier;
}
