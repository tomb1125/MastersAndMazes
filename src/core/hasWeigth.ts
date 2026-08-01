import { AffectsWeight } from "./affectsWeight.js";

export interface HasWeigth {
    weight: (x?: AffectsWeight) => number;
}