import { AbilityObject } from "../../components/abilityObject.js";
import { Ability } from "../ability.js";
import { Utility } from "../utility.js";
import { buildUtilities, UtilityRow } from "../utilityTable.js";

const ROWS: UtilityRow[] = [
    {
        typeName: 'wallUtility',
        name: 'Wall',
        chance: 1,
        cooldown: Ability.Cooldown.Encounter,
        value: 15,
        objects: [(x: AbilityObject) => x.isBulkMaterial],
        description: (wall: Utility) => 'On success create a thin Wall with length up to '+wall.value.getInlineValue()+' squares and 3 square heigth standing firmly on ground. It can be only climbed only with Climb Movement. As you create it, you can create one turn for each total 10 squares of length, but no sharp turns are allowed.'
    }
];

export function constructions(): Utility[] {
    return buildUtilities(ROWS);
}
