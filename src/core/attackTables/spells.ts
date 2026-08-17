import { Ability } from "../ability.js";
import { Attack } from "../attack.js";
import { AttackRow, buildAttacks } from "../attackTable.js";

const ROWS: AttackRow[] = [
    {
        typeName: 'basicSpell',
        name: 'Basic Spell',
        coreDescription: 'When you hit, deal damage.',
        chance: 0.7,
        damage: 10,
        manaCost: 1,
        range: Ability.Range.Medium
    },
    {
        typeName: 'fireballAttack',
        name: 'Fireball',
        coreDescription: 'When you hit, deal damage, then deal 5 to nearby enemies.',
        chance: 0.8,
        damage: 10,
        manaCost: 5,
        range: Ability.Range.Long,
        elements: [Ability.Element.Fire]
    }
];

export function spells(): Attack[] {
    return buildAttacks(ROWS, attack => attack.attackType = Attack.AttackType.Spell);
}
