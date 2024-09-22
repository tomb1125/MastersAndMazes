import { Modifier } from "../../../modifiers/modifier";
import { compensationModifier } from "../../../modifiers/modifiersRepository/compensationModifier";
import { Ability } from "../../ability";
import { AffectsWeight } from "../../affectsWeight";
import { Attack } from "../../attack";
import { CharacterContext } from "../../characterContext";

export class chainLightningAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Chain Lightning');
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Wizard) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.chance = 0.4;
        this.manaCost = 3;
        this.range = 20;
        this.coreDescription = 'When you hit, deal damage to 3 targets within range connected by lightning line. This line cannot have acute (sharp) angles.';
        this.subtype = Attack.Subtype.Spell;
        this.elements = [Ability.Element.Lightning];
        this.initModifiers();
        this.modifiers.push(new compensationModifier(this, 'Chain Lightning', 0.45, 0))
        this.initDamage();
        this.compensate();
    }
}