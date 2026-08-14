import { Modifier } from "../../../modifiers/modifier.js";
import { compensationModifier } from "../../../modifiers/modifiersRepository/compensationModifier.js";
import { Ability } from "../../ability.js";
import { AffectsWeight } from "../../affectsWeight.js";
import { Attack } from "../../attack.js";

export class fireballAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Fireball');
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