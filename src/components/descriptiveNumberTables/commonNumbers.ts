import { Utils } from "../../core/utils.js";
import { DescriptiveNumber } from "../descriptiveNumber.js";
import { buildDescriptiveNumbers, DescriptiveNumberRow } from "../descriptiveNumberTable.js";

const ROWS: DescriptiveNumberRow[] = [
    {
        typeName: 'currentHealthDescriptiveNumber',
        prefix: 'Vital',
        description: 'your current health',
        value: Utils.avgHealth,
        lowValue: 1
    }
];

export function commonNumbers(): DescriptiveNumber[] {
    return buildDescriptiveNumbers(ROWS, number => number.type = DescriptiveNumber.Type.Common);
}
