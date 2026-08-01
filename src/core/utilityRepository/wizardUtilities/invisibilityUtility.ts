import { AbilityObject } from "../../../components/abilityObject.js";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory.js";
import { DescriptiveNumber } from "../../../components/descriptiveNumber.js";
import { invisibilityEffect } from "../../../modifiers/effectRepository/multiclassEffects/invisibilityEffect.js";
import { gainEffectModifier } from "../../../modifiers/modifiersRepository/gainEffectModifier.js";
import { Ability } from "../../ability.js";
import { CharacterContext } from "../../characterContext.js";
import { Utility } from "../../utility.js";


export class invisibilityUtility extends Utility {

    constructor() {
        super('Invisibility');        
        this.weight = () => {return CharacterContext.classes.includes(CharacterContext.Class.Wizard) ? CharacterContext.IN_CLASS_MODIFIER : CharacterContext.OUT_OF_CLASS_WEIGHT}
        const invisibility: invisibilityEffect = new invisibilityEffect();
        invisibility.silence();
        const gainEffect: gainEffectModifier = new gainEffectModifier(this, invisibility);
        this.cooldown = Ability.Cooldown.Encounter; 
        this.chance = 1.6 
        this.value = new DescriptiveNumber(5);
        this.modifiers.push(invisibility);
        this.compensate();

        
        this.description = 'On success restore ' + this.value.getDescription() + ' Mana. ';

    }
}