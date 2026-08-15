import { Attack } from "../attack.js";
import { AttackRow, buildAttacks } from "../attackTable.js";

const ROWS: AttackRow[] = [
    {
        typeName: 'basicSpell',
        name: 'Basic Spell',
        coreDescription: 'When you hit, deal damage. '
    }
];

export function spells(): Attack[] {
    return buildAttacks(ROWS, attack => attack.subtype = Attack.Subtype.Spell);
}
