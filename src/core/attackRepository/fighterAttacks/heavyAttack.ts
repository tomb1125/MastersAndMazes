import { ClassUtils } from "../../../characters/classUtils.js";
import { compensationModifier } from "../../../modifiers/modifiersRepository/compensationModifier.js";
import { Ability } from "../../ability.js";
import { AffectsWeight } from "../../affectsWeight.js";
import { Attack } from "../../attack.js";
import { CharacterContext } from "../../characterContext.js";
import { Rule } from "../../rule.js";
import { Utils } from "../../utils.js";


export class heavyAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Heavy Strike');
        this.subtype = Attack.Subtype.Weapon;
        this.coreDescription = 'When you hit, deal damage. This ability treats any bonuses to damage, from Abilities and Weapons, as doubled. You may exit your Fighter\'s Stance to reroll chance roll for this Attack. '
        this.chance = 0.3;
        this.manaCost = 0;
        this.range = 1;        
        this.elements = [Ability.Element.Heavy];

        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Fighter) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}

        this.initModifiers();
        this.modifiers.push(new compensationModifier(this, 'Heavy', 0, -2))
        this.initDamage();        
        this.generate();
    }
}
