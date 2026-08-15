import { Ability } from "../ability.js";
import { Attack } from "../attack.js";
import { AttackRow, buildAttacks } from "../attackTable.js";

const ROWS: AttackRow[] = [
    {
        typeName: 'basicSpell',
        name: 'Basic Spell',
        coreDescription: 'When you hit, deal damage. '
    },
    {
        typeName: 'fireballAttack',
        name: 'Fireball',
        coreDescription: 'When you hit, deal damage, then deal half of this damage to enemies within 2 squares.  ',
        chance: 0.8,
        manaCost: 3,
        range: 15,
        elements: [Ability.Element.Fire]
    }
];

export function spells(): Attack[] {
    return buildAttacks(ROWS, attack => attack.subtype = Attack.Subtype.Spell);
}
