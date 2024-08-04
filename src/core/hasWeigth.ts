import { AffectsWeight } from "./affectsWeight";

export interface HasWeigth {
    weight: (x?: AffectsWeight) => number;
}