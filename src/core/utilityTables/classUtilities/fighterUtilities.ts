import { Ability } from "../../ability.js";
import { Utility } from "../../utility.js";
import { buildUtilities, UtilityRow } from "../../utilityTable.js";

const ROWS: UtilityRow[] = [
    {
        typeName: 'fighterGuard',
        name: 'Brace',
        chance: 0.7,
        cooldown: Ability.Cooldown.Encounter,
        value: 10,
        description: (brace: Utility) => 'Until your next turn, the first hit taken deals '+brace.value.getInlineValue()+' less damage.'
    },
    {
        typeName: 'fighterRally',
        name: 'Battle Cry',
        chance: 0.5,
        cooldown: Ability.Cooldown.Daily,
        value: 10,
        duration: 2,
        description: (cry: Utility) => 'On success every ally that hears you gains '+cry.value.getInlineValue()+' temporary hit points for '+cry.duration.getInlineValue()+' turns.'
    }
];

export function fighterUtilities(): Utility[] {
    return buildUtilities(ROWS, utility => utility.subtype = 'fighter');
}
