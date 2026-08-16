import { Ability } from "../ability.js";
import { Attack } from "../attack.js";
import { AttackRow, buildAttacks } from "../attackTable.js";

const ROWS: AttackRow[] = [
    {
        typeName: 'basicAttack',
        name: 'Basic Attack',
        coreDescription: 'When you hit, deal damage. ',
        chance: 0.6,
        damage: 5,
        manaCost: 1,
        range: Ability.Range.Medium
    }
];

export function weapons(): Attack[] {
    return buildAttacks(ROWS, attack => attack.subtype = Attack.Subtype.Weapon);
}
