import { Utils } from "../../core/utils.js";
import { Effect } from "../effect.js";
import { buildEffects, EffectRow } from "../effectTable.js";

const ROWS: EffectRow[] = [
    {
        typeName: 'stunEffect',
        name: 'Stun',
        namePrefix: 'Stunning',
        description: 'Stunned - character cannot take actions. Stunned ends at the end of a turn.',
        powerBonus: () => - 1.5 * Utils.getDPS(1)
    }
];

export function debuffs(): Effect[] {
    return buildEffects(ROWS, effect => effect.subtype = Effect.Subtype.Debuff);
}
