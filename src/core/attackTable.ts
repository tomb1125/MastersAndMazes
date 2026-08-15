import { Ability } from "./ability.js";
import { AffectsWeight } from "./affectsWeight.js";
import { Attack } from "./attack.js";
import { Utils } from "./utils.js";

export interface AttackRow {
    typeName: string;
    name: string;
    coreDescription: string;
    chance?: number;
    manaCost?: number;
    range?: number;
    cooldown?: Ability.Cooldown;
    elements?: Ability.Element[];
    weight?: (x?: AffectsWeight) => number;
}

export function buildAttacks(
    rows: AttackRow[],
    categorise?: (attack: Attack) => void): Attack[] {

    return rows.map(row => {
        const attack = new Attack(row.name);
        attack.typeName = row.typeName;
        attack.coreDescription = row.coreDescription;

        if(row.chance !== undefined) {
            attack.chance = row.chance;
        }
        if(row.manaCost !== undefined) {
            attack.manaCost = row.manaCost;
        }
        if(row.range !== undefined) {
            attack.range = row.range;
        }
        if(row.cooldown !== undefined) {
            attack.cooldown = row.cooldown;
        }
        if(row.weight) {
            attack.weight = row.weight;
        }
        if(categorise) {
            categorise(attack);
        }

        attack.elements = row.elements ? row.elements : [rollElement(attack.subtype)];
        attack.generate();

        return attack;
    });
}

function rollElement(subtype: Attack.Subtype): Ability.Element {
    const pool: Ability.Element[] = subtype === Attack.Subtype.Spell
        ? Ability.MAGIC_ELEMENTS
        : Ability.WEAPON_ELEMENTS;

    return pool[Utils.D(pool.length) - 1];
}
