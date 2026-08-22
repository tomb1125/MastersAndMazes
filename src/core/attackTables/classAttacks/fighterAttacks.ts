import { Ability } from "../../ability.js";
import { Attack } from "../../attack.js";
import { AttackRow, buildAttacks } from "../../attackTable.js";

const ROWS: AttackRow[] = [
    {
        typeName: 'fighterFollowUp',
        name: 'Follow Up',
        coreDescription: 'When you hit, deal damage.',
        chance: 0.4,
        damage: 0,
        damageDescription: 'damage dealt by your last attack',
        manaCost: 1,
        range: Ability.Range.Touch,
        elements: [Ability.Element.Heavy]
    },
    {
        typeName: 'fighterShieldBash',
        name: 'Shield Bash',
        coreDescription: 'When you hit, deal damage and push the target 1 square away from you.',
        chance: 0.7,
        damage: 7,
        manaCost: 1,
        range: Ability.Range.Touch,
        elements: [Ability.Element.Tactic]
    },
    {
        typeName: 'fighterRecklessSwing',
        name: 'Reckless Swing',
        coreDescription: 'When you hit, deal damage. Until your next turn, attacks against you have doubled chance to hit.',
        chance: 0.4,
        damage: 18,
        manaCost: 2,
        range: Ability.Range.Touch,
        elements: [Ability.Element.Heavy]
    },
    {
        typeName: 'fighterLunge',
        name: 'Lunge',
        coreDescription: 'When you hit, deal damage and step 1 square towards the target before the attack.',
        chance: 0.6,
        damage: 9,
        manaCost: 1,
        range: Ability.Range.Short,
        elements: [Ability.Element.Finesse]
    }
];

export function fighterAttacks(): Attack[] {
    return buildAttacks(ROWS, attack => {
        attack.attackType = Attack.AttackType.Weapon;
        attack.subtype = 'fighter';
    });
}
