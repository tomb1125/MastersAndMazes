import { Modifier } from "../../../modifiers/modifier";
import { compensationModifier } from "../../../modifiers/modifiersRepository/compensationModifier";
import { Ability } from "../../ability";
import { AffectsWeight } from "../../affectsWeight";
import { Attack } from "../../attack";
import { CharacterContext } from "../../characterContext";

export class fireballAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Fireball');
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Wizard) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.chance = 0.8;
        this.manaCost = 3;
        this.range = 15;
        this.coreDescription = 'When you hit, deal damage, then deal half of this damage to enemies within 2 squares.  ';
        this.subtype = Attack.Subtype.Spell;
        this.elements = [Ability.Element.Fire];
        this.initModifiers();
        this.modifiers.push(new compensationModifier(this, 'Fireball', 0.65, 0))
        this.initDamage();
        this.compensate();
    }
}