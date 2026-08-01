import { DescriptiveNumber } from "../components/descriptiveNumber.js";
import { Ability } from "./ability.js";

export interface CanAffectModifier {
    range?: number;
    chance?: number;
    damage?: DescriptiveNumber;
    type?: Ability.Type;
}