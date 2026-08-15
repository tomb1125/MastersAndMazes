import { Effect } from "./effect.js";
import { applyModifierRow, ModifierRow } from "./modifierTable.js";

class TableEffect extends Effect {
}

export interface EffectRow extends ModifierRow {
    duration?: number;
    value?: number;
}

export function buildEffects(
    rows: EffectRow[],
    categorise?: (effect: Effect) => void): Effect[] {

    return rows.map(row => {
        const effect = applyModifierRow(new TableEffect(), row);

        if(row.duration !== undefined) {
            effect.duration = row.duration;
        }
        if(row.value !== undefined) {
            effect.value = row.value;
        }
        if(categorise) {
            categorise(effect);
        }

        return effect;
    });
}
