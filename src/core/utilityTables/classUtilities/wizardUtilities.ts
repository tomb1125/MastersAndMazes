import { Ability } from "../../ability.js";
import { Utility } from "../../utility.js";
import { buildUtilities, UtilityRow } from "../../utilityTable.js";

const ROWS: UtilityRow[] = [
    {
        typeName: 'wizardPowerUp',
        name: 'Ponder',
        chance: 0.6,
        cooldown: Ability.Cooldown.Encounter,
        value: 10,
        description: (armor: Utility) => 'First ability you use next turn has reduced mana Cost by half.'
    }
];

export function wizardUtilities(): Utility[] {
    return buildUtilities(ROWS, utility => utility.subtype = 'wizard');
}
