import { Ability } from "../ability.js";
import { Attack } from "../attack.js";
import { AttackRow, buildAttacks } from "../attackTable.js";

const ROWS: AttackRow[] = [
    {
        typeName: 'basicAttack',
        name: 'Basic Attack',
        coreDescription: 'When you hit, deal damage. ',
        chance: 0.6,
        damage: 10,
        manaCost: 0,
        range: Ability.Range.Touch
    }
];

export function weapons(): Attack[] {
    return buildAttacks(ROWS, attack => attack.attackType = Attack.AttackType.Weapon);
}
