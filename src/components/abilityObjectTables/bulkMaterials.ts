import { AbilityObject } from "../abilityObject.js";
import { AbilityObjectRow, buildAbilityObjects } from "../abilityObjectTable.js";

const ROWS: AbilityObjectRow[] = [
    {
        typeName: 'paperMaterialAbilityObject',
        name: 'Paper Material',
        description: ' is made out of paper and lasts until destroyed. 1 Square of a paper has 1 Health. It can be run through but it costs extra 3 squares of movement. ',
        rarity: 0.3,
        prefix: 'Paper',
        weight: () => 0.5
    },
    {
        typeName: 'brickMaterialAbilityObject',
        name: 'Brick Material',
        description: ' is made out of lose stone and lasts until destroyed. 1 Square of a brick material has 50 Health, though even if reduced to 0 Health it crumbles at the end of enemy turn. ',
        rarity: 2,
        prefix: 'Brick'
    }
];

export function bulkMaterials(): AbilityObject[] {
    return buildAbilityObjects(ROWS, object => object.isBulkMaterial = true);
}
