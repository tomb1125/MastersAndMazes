import { ClassUtils } from "../../../characters/classUtils.js";
import { compensationModifier } from "../../../modifiers/modifiersRepository/compensationModifier.js";
import { Ability } from "../../ability.js";
import { AffectsWeight } from "../../affectsWeight.js";
import { Attack } from "../../attack.js";
import { CharacterContext } from "../../characterContext.js";
import { Rule } from "../../rule.js";
import { Utils } from "../../utils.js";


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
