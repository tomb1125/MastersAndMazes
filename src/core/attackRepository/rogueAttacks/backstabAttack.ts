import { Modifier } from "../../../modifiers/modifier";
import { compensationModifier } from "../../../modifiers/modifiersRepository/compensationModifier";
import { Ability } from "../../ability";
import { AffectsWeight } from "../../affectsWeight";
import { Attack } from "../../attack";
import { CharacterContext } from "../../characterContext";

export class backstabAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Backstab');
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Rogue) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.chance = 0.8;
        this.manaCost = 0;
        this.range = 1;
        this.coreDescription = 'When you hit, deal damage. Double this damage if an enemy is not aware of you, is Stunned, is affected by Rogue\'s Poison or both is adjacent to your ally and did not attack you last turn. ';
        this.subtype = Attack.Subtype.Spell;
        this.elements = [Ability.Element.Dark];
        this.initModifiers();
        this.modifiers.push(new compensationModifier(this, 'Backstab', 0.75, 0))
        this.initDamage();
        this.compensate();
    }
}