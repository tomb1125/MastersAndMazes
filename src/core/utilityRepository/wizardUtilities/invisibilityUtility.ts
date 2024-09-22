import { AbilityObject } from "../../../components/abilityObject";
import { AbilityObjectFactory } from "../../../components/abilityObjectFactory";
import { DescriptiveNumber } from "../../../components/descriptiveNumber";
import { invisibilityEffect } from "../../../modifiers/effectRepository/multiclassEffects/invisibilityEffect";
import { gainEffectModifier } from "../../../modifiers/modifiersRepository/gainEffectModifier";
import { Ability } from "../../ability";
import { CharacterContext } from "../../characterContext";
import { Utility } from "../../utility";


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