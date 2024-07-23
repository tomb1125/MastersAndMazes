import { DescriptiveNumber } from "../components/descriptiveNumber";

export interface PowerModifier {
    range?: number;
    chance?: number;
    damage?: DescriptiveNumber;
}