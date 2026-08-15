import { Ability } from "../../core/ability.js";
import { AffectsWeight } from "../../core/affectsWeight.js";
import { Modifier } from "../modifier.js";
import { buildModifiers, ModifierRow } from "../modifierTable.js";

const ROWS: ModifierRow[] = [
    {
        typeName: 'manaFumeModifier',
        name: 'Mana Fume',
        namePrefix: 'Fuming',
        description: 'If you\'ve hit and have 4 or less Mana, gain 10 Mana.',
        powerBonus: () => -5,
        weight: (affector?: AffectsWeight) => affector != undefined && affector.type === Ability.Type.Attack ? 1 : 0
    }
];

export function improvements(): Modifier[] {
    return buildModifiers(ROWS, modifier => modifier.modifierType = Modifier.Type.Improvement);
}
