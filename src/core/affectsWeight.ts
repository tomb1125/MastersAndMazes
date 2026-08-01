import { Ability } from "./ability.js";

export interface AffectsWeight {
    type?: Ability.Type;
    cooldown?: Ability.Cooldown;
}