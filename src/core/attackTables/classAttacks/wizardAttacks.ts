import { Ability } from "../../ability.js";
import { Attack } from "../../attack.js";
import { AttackRow, buildAttacks } from "../../attackTable.js";

const ROWS: AttackRow[] = [
    {
        typeName: 'wizardMagicManaBurn',
        name: 'Magic Missile',
        coreDescription: 'When you hit, deal damage and additional damage equal to mana spent last turn.',
        chance: 0.9,
        damage: 8,
        manaCost: 1,
        range: Ability.Range.Long,
        elements: [Ability.Element.Force]
    }
];

export function wizardAttacks(): Attack[] {
    return buildAttacks(ROWS, attack => {
        attack.attackType = Attack.AttackType.Spell;
        attack.subtype = 'wizard';
    });
}
