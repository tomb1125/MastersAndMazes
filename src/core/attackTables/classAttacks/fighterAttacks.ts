import { Ability } from "../../ability.js";
import { Attack } from "../../attack.js";
import { AttackRow, buildAttacks } from "../../attackTable.js";

const ROWS: AttackRow[] = [
    {
        typeName: 'fighterFollowUp',
        name: 'Follow Up',
        coreDescription: 'When you hit, deal damage.',
        chance: 0.4,
        damageDescription: 'damage dealt by your last attack',
        manaCost: 1,
        range: Ability.Range.Touch,
        elements: [Ability.Element.Heavy]
    },
    {
        typeName: 'fighterKnifeToss',
        name: 'Knife Toss',
        coreDescription: 'When you hit, deal damage and repeat this attack (max 3 attacks per action). This attack can use "chance" of your previous attack.',
        chance: 0.2,
        damage: 10,
        manaCost: 1,
        range: Ability.Range.Touch,
        elements: [Ability.Element.Heavy]
    }
];

export function fighterAttacks(): Attack[] {
    return buildAttacks(ROWS, attack => {
        attack.attackType = Attack.AttackType.Weapon;
        attack.subtype = 'fighter';
    });
}
