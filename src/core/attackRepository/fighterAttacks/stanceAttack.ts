import { ClassUtils } from "../../../characters/classUtils";
import { compensationModifier } from "../../../modifiers/modifiersRepository/compensationModifier";
import { Ability } from "../../ability";
import { AffectsWeight } from "../../affectsWeight";
import { Attack } from "../../attack";
import { CharacterContext } from "../../characterContext";
import { Rule } from "../../rule";
import { Utils } from "../../utils";


export class stanceAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Stance');
        this.subtype = Attack.Subtype.Weapon;
        this.coreDescription = 'When you hit, deal damage and enter one of the Fighter Stances. '
        this.chance = 0.75;
        this.manaCost = 0;
        this.range = 1;        
        this.elements = [Ability.Element.Tactic];

        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Fighter) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        this.longDescription = Utils.getRule(Rule.Name.FighterStance).description;

        this.initModifiers();
        this.modifiers.push(new compensationModifier(this, 'Fighter Stance', 0, - 1 * Utils.PERMAMENT_DURATION_MODIFIER))
        this.initDamage();        
        this.generate();
    }
}
