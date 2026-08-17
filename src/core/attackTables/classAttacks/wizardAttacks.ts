import { Ability } from "../../ability.js";
import { Attack } from "../../attack.js";
import { AttackRow, buildAttacks } from "../../attackTable.js";

const ROWS: AttackRow[] = [
    {
        typeName: 'wizardMagicMissile',
        name: 'Magic Missile',
        coreDescription: 'When you hit, deal damage. You can split the damage between two targets within 5 squares of each other.',
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
