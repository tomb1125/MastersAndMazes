import { AbilityObject } from "../components/abilityObject.js";
import { AbilityObjectFactory } from "../components/abilityObjectFactory.js";
import { DescriptiveNumber } from "../components/descriptiveNumber.js";
import { Ability } from "./ability.js";
import { AffectsWeight } from "./affectsWeight.js";
import { Utility } from "./utility.js";

export interface UtilityRow {
    typeName: string;
    name: string;
    chance: number;
    description: string | ((utility: Utility) => string);
    cooldown?: Ability.Cooldown;
    value?: number;
    duration?: number;
    objects?: ((x: AbilityObject) => boolean)[];
    weight?: (x?: AffectsWeight) => number;
}

// The three steps at the end are ordered, and reordering them fails silently: compensate
// divides the chance by the rarity of the components, and a description quotes the value
// compensate just settled on rather than the one the row asked for.
export function buildUtilities(rows: UtilityRow[]): Utility[] {
    return rows.map(row => {
        const utility = new Utility(row.name);
        utility.typeName = row.typeName;
        utility.chance = row.chance;

        if(row.cooldown !== undefined) {
            utility.cooldown = row.cooldown;
        }
        if(row.value !== undefined) {
            utility.value = new DescriptiveNumber(row.value);
        }
        if(row.duration !== undefined) {
            utility.duration = new DescriptiveNumber(row.duration);
        }
        if(row.weight) {
            utility.weight = row.weight;
        }

        if(row.objects) {
            row.objects.forEach(matches => {
                utility.objects.push(new AbilityObjectFactory(utility).filter(matches).get(1)[0]);
            });
        }

        utility.compensate();
        utility.description = typeof row.description === 'string'
            ? row.description
            : row.description(utility);

        return utility;
    });
}
