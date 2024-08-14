import { Ability } from "../../../core/ability";
import { AffectsWeight } from "../../../core/affectsWeight";
import { CharacterContext } from "../../../core/characterContext";
import { Modifier } from "../../modifier";

export class undeadBaneModifier extends Modifier {
  constructor(affector: AffectsWeight) {
    super();
    this.powerMultiplier = () => 0.95;
    this.weight = (affector) => {
      return affector != undefined && affector.type === Ability.Type.Attack
        ? CharacterContext.classes.includes(CharacterContext.Class.Cleric) ||
          CharacterContext.classes.includes(CharacterContext.Class.Paladin)
          ? 1
          : CharacterContext.OUT_OF_CLASS_WEIGHT
        : 0;
    };
    this.name = "Undead Bane";
    this.namePrefix = "Baning Undead";
    this.description =
      "If this targets an undead, demon or devil repeat the attack once.";
    this.longDescription = "";
    this.modifierType = Modifier.Type.Improvement;
  }
}
