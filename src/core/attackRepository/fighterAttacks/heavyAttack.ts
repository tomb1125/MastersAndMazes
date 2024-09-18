import { ClassUtils } from "../../../characters/classUtils";
import { compensationModifier } from "../../../modifiers/modifiersRepository/compensationModifier";
import { AffectsWeight } from "../../affectsWeight";
import { Attack } from "../../attack";
import { CharacterContext } from "../../characterContext";
import { Rule } from "../../rule";
import { Utils } from "../../utils";


export class heavyAttack extends Attack {

    constructor(affector?: AffectsWeight) {
        super('Heavy Strike');
        this.subtype = Attack.Subtype.Weapon;
        this.coreDescription = 'When you hit, deal damage. This ability treats any bonuses to damage, from Abilities and Weapons, as doubled. You may exit your Fighter\'s Stance to reroll chance roll for this Attack. '
        this.chance = 0.3;
        this.manaCost = 0;
        this.range = 1;        
        this.subtype = Attack.Subtype.Weapon;

        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Fighter) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}

        this.initModifiers();
        this.modifiers.push(new compensationModifier(this, 'Heavy', 0, -2))
        this.initDamage();        
        this.generate();
    }
}
