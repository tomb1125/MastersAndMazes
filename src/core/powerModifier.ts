import { DescriptiveNumber } from "../components/descriptiveNumber";
import { Ability } from "./ability";

export interface PowerModifier {
    range?: number;
    chance?: number;
    damage?: DescriptiveNumber;
    type?: Ability.Type;
}