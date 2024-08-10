import { DescriptiveNumber } from "../components/descriptiveNumber";
import { Ability } from "./ability";

export interface CanAffectModifier {
    range?: number;
    chance?: number;
    damage?: DescriptiveNumber;
    type?: Ability.Type;
}