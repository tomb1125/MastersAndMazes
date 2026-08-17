import { Ability } from "../../ability.js";
import { Utility } from "../../utility.js";
import { buildUtilities, UtilityRow } from "../../utilityTable.js";

const ROWS: UtilityRow[] = [
    {
        typeName: 'wizardMageArmor',
        name: 'Mage Armor',
        chance: 1,
        cooldown: Ability.Cooldown.Daily,
        value: 10,
        description: (armor: Utility) => 'Until the end of the adventure you are surrounded by a woven field of force. The first time you are hit in an encounter, reduce the damage taken by ' + armor.value.getInlineValue() + '.'
    }
];

export function wizardUtilities(): Utility[] {
    return buildUtilities(ROWS, utility => utility.subtype = 'wizard');
}
