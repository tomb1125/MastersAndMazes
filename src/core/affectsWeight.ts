import { Ability } from "./ability";

export interface AffectsWeight {
    type?: Ability.Type;
    cooldown?: Ability.Cooldown;
}