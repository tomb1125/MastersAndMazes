import { HasFactory } from "./hasFactory";

export interface HasWeigth {
    weight: (x: HasFactory) => number;
}