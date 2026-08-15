import { Utils } from "../../core/utils.js";
import { Modifier } from "../modifier.js";
import { buildModifiers, ModifierRow } from "../modifierTable.js";

const ROWS: ModifierRow[] = [
    {
        typeName: 'grazedModifier',
        name: 'Grazed',
        namePrefix: 'Grazed',
        description: 'When you add this ability to your character gain 2 Scars (each Scar brings character slightly closer to death, see rules for more).',
        powerMultiplier: () => 1.2,
        weight: () => Utils.COMMON_MODIFIER
    }
];

export function constraints(): Modifier[] {
    return buildModifiers(ROWS, modifier => modifier.modifierType = Modifier.Type.Constraint);
}
