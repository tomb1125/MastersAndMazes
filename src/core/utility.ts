import { AbilityObject } from "../components/abilityObject";
import { Ability } from "./ability";
import { Activity } from "./activity";
import { HasWeigth } from "./hasWeigth";
import { PowerModifier } from "./powerModifier";

export class Utility extends Activity implements PowerModifier, HasWeigth {
    weight: number;
    objects: AbilityObject[];

    constructor(otherName?: string) {
        super(otherName);
        this.cooldown = Ability.Cooldown.Daily;
      }
}