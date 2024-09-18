import { compensationModifier } from "../../../modifiers/modifiersRepository/compensationModifier";
import { Ability } from "../../ability";
import { AffectsWeight } from "../../affectsWeight";
import { Attack } from "../../attack";
import { CharacterContext } from "../../characterContext";
import { Utils } from "../../utils";

export class divineStrikeAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Divine Strike');
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.chance = 0.3;
        this.manaCost = 1;
        this.range = 10;
        this.coreDescription = 'When you hit, deal damage and gain 5 Righteus Lights until end of the encounter. You and each ally within 10 squares can use one of the lights with a Swift Action to either heal 5 Health or gain 1 Boon on nearest chance roll. ';
        this.subtype = Attack.Subtype.Spell;
        this.elements = [Ability.Element.Heavy]
        this.initModifiers();
        this.modifiers.push(new compensationModifier(this, 'Righteus Lights', 0, - Utils.ENEMY_DPS * Utils.PERMAMENT_DURATION_MODIFIER / 6))
        this.initDamage();
        this.compensate();
    }
}