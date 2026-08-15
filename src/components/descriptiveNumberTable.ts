import { AffectsWeight } from "../core/affectsWeight.js";
import { DescriptiveNumber } from "./descriptiveNumber.js";

export interface DescriptiveNumberRow {
    typeName: string;
    name?: string;
    prefix?: string;
    description?: string;
    value?: number;
    lowValue?: number;
    bonus?: number;
    multiplier?: number;
    weight?: (x?: AffectsWeight) => number;
}

export function buildDescriptiveNumbers(
    rows: DescriptiveNumberRow[],
    categorise?: (descriptiveNumber: DescriptiveNumber) => void): DescriptiveNumber[] {

    return rows.map(row => {
        const descriptiveNumber = new DescriptiveNumber(row.value);
        descriptiveNumber.typeName = row.typeName;

        if(row.name !== undefined) {
            descriptiveNumber.name = row.name;
        }
        if(row.prefix !== undefined) {
            descriptiveNumber.prefix = row.prefix;
        }
        if(row.description !== undefined) {
            descriptiveNumber.description = row.description;
        }
        if(row.lowValue !== undefined) {
            descriptiveNumber.lowValue = row.lowValue;
        }
        if(row.bonus !== undefined) {
            descriptiveNumber.bonus = row.bonus;
        }
        if(row.multiplier !== undefined) {
            descriptiveNumber.multiplier = row.multiplier;
        }
        if(row.weight) {
            descriptiveNumber.weight = row.weight;
        }
        if(categorise) {
            categorise(descriptiveNumber);
        }

        return descriptiveNumber;
    });
}
