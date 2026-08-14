import { AffectsWeight } from "../core/affectsWeight.js";
import { AbilityObject } from "./abilityObject.js";

/**
 * The flat-content counterpart to an abilityObjectRepository class: content that is
 * nothing but field assignments lives as a row in a table instead of as a file of its
 * own. Rows that need real logic - a weight that reads CharacterContext, anything that
 * has to run at construction - stay classes in the repository folder. Both formats end
 * up in the same WeightedList, so a row can be promoted to a class later without any
 * caller noticing. typeName stands in for the class name a repository entry would have,
 * and is what vendors narrow stock by.
 */
export interface AbilityObjectRow {
    typeName: string;
    name: string;
    description: string;
    rarity: number;
    prefix?: string;
    weight?: (x?: AffectsWeight) => number;
}

/**
 * Builds a table's rows into the instances a factory pushes. The is* category flags are
 * not row fields: a table holds one category, so it tags all of its rows at once through
 * categorise.
 *
 *   export function bulkMaterials(): AbilityObject[] {
 *       return buildAbilityObjects(ROWS, object => object.isBulkMaterial = true);
 *   }
 */
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
