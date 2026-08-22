import { DescriptiveNumber } from "../components/descriptiveNumber.js";
import { Ability } from "./ability.js";
import { AffectsWeight } from "./affectsWeight.js";
import { Attack } from "./attack.js";
import { Utils } from "./utils.js";

export interface AttackRow {
    typeName: string;
    name: string;
    coreDescription: string;
    chance: number;
    damage: number;
    damageDescription?: string;
    manaCost: number;
    range: Ability.Range;
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
        attack.chance = row.chance;
        attack.manaCost = row.manaCost;
        attack.range = row.range;

        // Compensation mutates the damage, so it has to be a new instance per draw - a
        // DescriptiveNumber held in the row literal would collect every bonus every
        // generated copy of the row was ever given.
        attack.damage = new DescriptiveNumber(row.damage);

        if(row.damageDescription !== undefined) {
            attack.damage.description = row.damageDescription;
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

        attack.elements = row.elements ? row.elements : [rollElement(attack.attackType)];
        attack.generate();

        return attack;
    });
}

function rollElement(attackType: Attack.AttackType): Ability.Element {
    const pool: Ability.Element[] = attackType === Attack.AttackType.Spell
        ? Ability.MAGIC_ELEMENTS
        : Ability.WEAPON_ELEMENTS;

    return pool[Utils.D(pool.length) - 1];
}
