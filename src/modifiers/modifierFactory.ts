import { PowerModifier } from "../core/powerModifier";
import { Utils } from "../core/utils";
import { WeightedList } from "../core/weightedList";
import { Modifier } from "./modifier"
import { EffectFactory } from "./effectFactory"
import { Effect } from "./effect"
import { DescriptiveNumberFactory } from "./../components/descriptiveNumberFactory"


export class ModifierFactory {

    public static getAll(): WeightedList {
        const mods: WeightedList = new WeightedList();

        const nightly = new Modifier();
        nightly.powerMultiplier = () => {return 1.35};
        nightly.name = 'Nightly';
        nightly.namePrefix = 'Nightly';
        nightly.description = 'Can be used only in the night.';
        nightly.longDescription = 'Can be also used on planes without sun.';
        nightly.type = Modifier.Type.Constraint;
        mods.push(nightly);
        
        const bloodied = new Modifier();
        bloodied.powerMultiplier = () => {return 1.5};
        bloodied.name = 'Bloody';
        bloodied.namePrefix = 'Bloody';
        bloodied.description = 'Can be used only when you have half or less Health.';
        bloodied.longDescription = '';
        bloodied.type = Modifier.Type.Constraint;
        mods.push(bloodied);
        
        const ultimate = new Modifier();
        ultimate.powerMultiplier = () => {return 2.5};
        ultimate.name = 'Ultimate';
        ultimate.namePrefix = 'Ultimate'; //numeric component
        ultimate.description = 'Can be used only on turn 8 or later.';
        ultimate.longDescription = '';
        ultimate.type = Modifier.Type.Constraint;
        mods.push(ultimate);
        
        const signature = new Modifier();
        signature.powerMultiplier = () => {return 1.2};
        signature.name = 'Signature';
        signature.namePrefix = 'Signature';
        signature.description = 'This is Signature Ability - First Signature Ability you use each combat gains 1 Boon for its chance or +4 damage, before rolling.';
        signature.longDescription = '';
        signature.type = Modifier.Type.Constraint;
        mods.push(signature);
        
        const layline = new Modifier();
        layline.powerMultiplier = (x: PowerModifier) => {return x.range ? Math.max(1.1, 2.4 - x.range/10) : 1}; 1.7; 
        layline.name = 'Layline';
        layline.namePrefix = 'Layline';
        layline.description = 'Can be used only while adjacent to place of power.';
        layline.longDescription = '';
        layline.type = Modifier.Type.Constraint;
        mods.push(layline);
        
        const vengeful = new Modifier();
        vengeful.powerMultiplier = (x: PowerModifier) => 1.3; 
        vengeful.name = 'Vengeance';
        vengeful.namePrefix = 'Vengeful';
        vengeful.description = 'Can be only used against enemy which attacked you last turn. ';
        vengeful.longDescription = '';
        vengeful.type = Modifier.Type.Constraint;
        mods.push(vengeful);
        
        const momentum = new Modifier();
        momentum.powerMultiplier = (x: PowerModifier) => 2.5;
        momentum.name = 'Inertia' 
        momentum.namePrefix = 'Inertia'; //TODO add small numeric component here
        momentum.description = 'Can be only used when you missed with two attacks in a row. ';
        momentum.longDescription = '';
        momentum.type = Modifier.Type.Constraint;
        mods.push(momentum);
        
        const doubleStrike = new Modifier();
        doubleStrike.powerMultiplier = () => {return 0.4};
        doubleStrike.name = 'Double';
        doubleStrike.namePrefix = 'Double';
        doubleStrike.description = 'After this action, repeat this action once, without paying any costs. You cannot change targets.';
        doubleStrike.longDescription = '';
        doubleStrike.type = Modifier.Type.Improvement;
        mods.push(doubleStrike);
        
        const cleave = new Modifier();
        cleave.powerMultiplier = () => {return 0.5};
        cleave.name = 'Cleave'
        cleave.namePrefix = 'Cleaving';
        cleave.description = 'This action also targets one creature adjacent to initial target.';
        cleave.longDescription = '';
        cleave.type = Modifier.Type.Improvement;
        mods.push(cleave);
        
        const fast = new Modifier();
        fast.powerMultiplier = () => {return 0.5};
        fast.name = 'Fast'
        fast.namePrefix = 'Fast';
        fast.description = 'Once per turn when you use Fast Action, gain Action.';
        fast.longDescription = '';
        fast.type = Modifier.Type.Improvement;
        mods.push(fast);
        
        const lifesteal = new Modifier(); 
        lifesteal.weight = 1; 
        lifesteal.type = Modifier.Type.Improvement;
        lifesteal.name = 'Lifesteal'; 
        lifesteal.numericComponents = DescriptiveNumberFactory.get(1);
        lifesteal.namePrefix = 'Leeching'; 
        lifesteal.description = 'When you hit, heal yourself equal to: '+lifesteal.numericComponents[0].getDescription()+'.';
        lifesteal.powerBonus = () => {return - lifesteal.numericComponents[0].getNumber()};
        lifesteal.longDescription = '';
        lifesteal.elements =  [[Modifier.Element.Holy, Modifier.Element.Shadow, Modifier.Element.Curse, Modifier.Element.Nature].sort(() => 0.5 - Utils.random())[1]];
        mods.push(lifesteal);
        
        const applyEffect = new Modifier();
        applyEffect.longDescription = '';
        applyEffect.type = Modifier.Type.Improvement;
        applyEffect.weight = mods.items.length/5;
        applyEffect.effect = EffectFactory.getAll().filter((eff: Effect) => eff.subtype === Effect.Subtype.Debuff).get(1)[0] as Effect;
        applyEffect.description = 'When you hit, apply effect: '+applyEffect.effect.description;
        applyEffect.namePrefix = applyEffect.effect.namePrefix;
        applyEffect.name = 'Apply '+applyEffect.effect.name;
        applyEffect.powerBonus = (x: PowerModifier) => {return x.chance != null && x.range != null ?  x.chance / Utils.getRangeCoeficient(x.range) * applyEffect.effect.powerBonus(x) : -1000000 };
        applyEffect.powerMultiplier = (x: PowerModifier) => {return applyEffect.effect.powerMultiplier(x) }; //TODO test if true
        mods.push(applyEffect);

        const gainEffect = new Modifier(); //TODO continue from here
        gainEffect.type = Modifier.Type.Improvement;
        gainEffect.weight = mods.items.length/5;
        gainEffect.effect = EffectFactory.getAll().filter((eff: Effect) => eff.subtype === Effect.Subtype.Buff).get(1)[0] as Effect;
        gainEffect.description = 'When you hit, gain effect: '+gainEffect.effect.description;
        gainEffect.namePrefix = gainEffect.effect.namePrefix;
        gainEffect.name = 'Gain '+gainEffect.effect.name;
        gainEffect.powerBonus = (x: PowerModifier) => {return x.chance != null ?  x.chance * gainEffect.effect.powerBonus(x) : -100000 };
        gainEffect.powerMultiplier = (x: PowerModifier) => {return gainEffect.effect.powerMultiplier(x) }; //TODO test if true
        mods.push(gainEffect);

        
        
        return mods;
    }

    public static get(count: number) {
        return ModifierFactory.getAll().get(count) as Modifier[];
    }
    
}