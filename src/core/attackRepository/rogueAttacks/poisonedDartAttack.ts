import { Modifier } from "../../../modifiers/modifier";
import { compensationModifier } from "../../../modifiers/modifiersRepository/compensationModifier";
import { Ability } from "../../ability";
import { AffectsWeight } from "../../affectsWeight";
import { Attack } from "../../attack";
import { CharacterContext } from "../../characterContext";

export class poisonedDartAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Poisoned Dart');
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.chance = 0.4;
        this.manaCost = 0;
        this.range = 10;
        this.coreDescription = 'When you hit, deal damage and apply effect - Rogue\'s Poison which lasts 3 turns. When it expires from duration, target takes 50 damage.';
        this.subtype = Attack.Subtype.Spell;
        this.elements = [Ability.Element.Poison]
        this.initModifiers();
        this.modifiers.push(new compensationModifier(this, 'Poisoned Dart', 0, -20))
        this.initDamage();
        this.compensate();
    }
}