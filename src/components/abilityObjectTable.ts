import { AffectsWeight } from "../core/affectsWeight.js";
import { AbilityObject } from "./abilityObject.js";

export interface AbilityObjectRow {
    typeName: string;
    name: string;
    description: string;
    rarity: number;
    prefix?: string;
    weight?: (x?: AffectsWeight) => number;
}

export function buildAbilityObjects(
    rows: AbilityObjectRow[],
    categorise?: (object: AbilityObject) => void): AbilityObject[] {

    return rows.map(row => {
        const object = new AbilityObject(row.name);
        object.typeName = row.typeName;
        object.description = row.description;
        object.rarity = row.rarity;

        if(row.prefix !== undefined) {
            object.prefix = row.prefix;
        }
        if(row.weight) {
            object.weight = row.weight;
        }
        if(categorise) {
            categorise(object);
        }

        return object;
    });
}
