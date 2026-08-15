import { Attack } from "../attack.js";
import { AttackRow, buildAttacks } from "../attackTable.js";

const ROWS: AttackRow[] = [
    {
        typeName: 'basicAttack',
        name: 'Basic Attack',
        coreDescription: 'When you hit, deal damage. '
    }
];

export function weapons(): Attack[] {
    return buildAttacks(ROWS, attack => attack.subtype = Attack.Subtype.Weapon);
}
