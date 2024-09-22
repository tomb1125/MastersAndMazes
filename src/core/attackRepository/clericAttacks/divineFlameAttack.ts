import { Modifier } from "../../../modifiers/modifier";
import { compensationModifier } from "../../../modifiers/modifiersRepository/compensationModifier";
import { Ability } from "../../ability";
import { AffectsWeight } from "../../affectsWeight";
import { Attack } from "../../attack";
import { CharacterContext } from "../../characterContext";

export class divineFlameAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Divine Flame');
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Cleric) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.chance = 0.8;
        this.manaCost = 1;
        this.range = 10;
        this.coreDescription = 'When you hit, deal damage and apply effect: Holy Flame - enemy sheds light in 5 squares radius, cannot become invisible and has 1 Bane on all attacks (this Bane does not stack). This effect lasts until end of encounter. ';
        this.subtype = Attack.Subtype.Spell;
        this.elements = [Ability.Element.Fire]
        this.initModifiers();
        this.modifiers.push(new compensationModifier(this, 'Divine Flame', 0.8, 0))
        this.initDamage();
        this.compensate();
    }
}