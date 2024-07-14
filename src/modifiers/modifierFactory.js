"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifierFactory = void 0;
var utils_1 = require("../core/utils");
var weightedList_1 = require("../core/weightedList");
var modifier_1 = require("./modifier");
var effectFactory_1 = require("./effectFactory");
var effect_1 = require("./effect");
var descriptiveNumberFactory_1 = require("./../components/descriptiveNumberFactory");
var ModifierFactory = /** @class */ (function () {
    function ModifierFactory() {
    }
    ModifierFactory.getAll = function () {
        var mods = new weightedList_1.WeightedList();
        var nightly = new modifier_1.Modifier();
        nightly.powerMultiplier = function () { return 1.35; };
        nightly.name = 'Nightly';
        nightly.namePrefix = 'Nightly';
        nightly.description = 'Can be used only in the night.';
        nightly.longDescription = 'Can be also used on planes without sun.';
        nightly.type = modifier_1.Modifier.Type.Constraint;
        mods.push(nightly);
        var bloodied = new modifier_1.Modifier();
        bloodied.powerMultiplier = function () { return 1.5; };
        bloodied.name = 'Bloody';
        bloodied.namePrefix = 'Bloody';
        bloodied.description = 'Can be used only when you have half or less Health.';
        bloodied.longDescription = '';
        bloodied.type = modifier_1.Modifier.Type.Constraint;
        mods.push(bloodied);
        var ultimate = new modifier_1.Modifier();
        ultimate.powerMultiplier = function () { return 2.5; };
        ultimate.name = 'Ultimate';
        ultimate.namePrefix = 'Ultimate';
        ultimate.description = 'Can be used only on turn 8 or later.';
        ultimate.longDescription = '';
        ultimate.type = modifier_1.Modifier.Type.Constraint;
        mods.push(ultimate);
        var signature = new modifier_1.Modifier();
        signature.powerMultiplier = function () { return 1.2; };
        signature.name = 'Signature';
        signature.namePrefix = 'Signature';
        signature.description = 'Can be used only on an even round (2, 4, 6...).';
        signature.longDescription = '';
        signature.type = modifier_1.Modifier.Type.Constraint;
        mods.push(signature);
        var layline = new modifier_1.Modifier();
        layline.powerMultiplier = function (x) { return x.range ? Math.max(1.1, 2.4 - x.range / 10) : 1; };
        1.7;
        layline.name = 'Layline';
        layline.namePrefix = 'Layline';
        layline.description = 'Can be used only while adjacent to place of power.';
        layline.longDescription = '';
        layline.type = modifier_1.Modifier.Type.Constraint;
        mods.push(layline);
        var vengeful = new modifier_1.Modifier();
        vengeful.powerMultiplier = function (x) { return 1.3; };
        vengeful.name = 'Vengeance';
        vengeful.namePrefix = 'Vengeful';
        vengeful.description = 'Can be only used against enemy which attacked you last turn. ';
        vengeful.longDescription = '';
        vengeful.type = modifier_1.Modifier.Type.Constraint;
        mods.push(vengeful);
        var momentum = new modifier_1.Modifier();
        momentum.powerMultiplier = function (x) { return 2.5; };
        momentum.name = 'Inertia';
        momentum.namePrefix = 'Inertia';
        momentum.description = 'Can be only used when you missed with two attacks in a row. ';
        momentum.longDescription = '';
        momentum.type = modifier_1.Modifier.Type.Constraint;
        mods.push(momentum);
        var doubleStrike = new modifier_1.Modifier();
        doubleStrike.powerMultiplier = function () { return 0.4; };
        doubleStrike.name = 'Double';
        doubleStrike.namePrefix = 'Double';
        doubleStrike.description = 'After this action, repeat this action once, without paying any costs. You cannot change targets.';
        doubleStrike.longDescription = '';
        doubleStrike.type = modifier_1.Modifier.Type.Improvement;
        mods.push(doubleStrike);
        var cleave = new modifier_1.Modifier();
        cleave.powerMultiplier = function () { return 0.5; };
        cleave.name = 'Cleave';
        cleave.namePrefix = 'Cleaving';
        cleave.description = 'This action also targets one creature adjacent to initial target.';
        cleave.longDescription = '';
        cleave.type = modifier_1.Modifier.Type.Improvement;
        mods.push(cleave);
        var fast = new modifier_1.Modifier();
        fast.powerMultiplier = function () { return 0.5; };
        fast.name = 'Fast';
        fast.namePrefix = 'Fast';
        fast.description = 'Once per turn when you use Fast Action, gain Action.';
        fast.longDescription = '';
        fast.type = modifier_1.Modifier.Type.Improvement;
        mods.push(fast);
        var applyEffect = new modifier_1.Modifier();
        applyEffect.longDescription = '';
        applyEffect.type = modifier_1.Modifier.Type.Improvement;
        applyEffect.weight = mods.items.length / 3;
        applyEffect.effect = effectFactory_1.EffectFactory.getAll().filter(function (eff) { return eff.subtype === effect_1.Effect.Subtype.Debuff; }).get(1)[0];
        applyEffect.description = 'When you hit, apply effect: ' + applyEffect.effect.description;
        applyEffect.namePrefix = applyEffect.effect.namePrefix;
        applyEffect.name = 'Apply ' + applyEffect.effect.name;
        applyEffect.powerBonus = function (x) { return x.chance != null && x.range != null ? x.chance / utils_1.Utils.getRangeCoeficient(x.range) * applyEffect.effect.powerBonus(x) : applyEffect.effect.powerBonus(x); };
        applyEffect.powerMultiplier = function (x) { return x.chance != null && x.range != null ? x.chance / utils_1.Utils.getRangeCoeficient(x.range) * applyEffect.effect.powerMultiplier(x) : applyEffect.effect.powerMultiplier(x); };
        mods.push(applyEffect);
        var lifesteal = new modifier_1.Modifier();
        lifesteal.weight = 1;
        lifesteal.type = modifier_1.Modifier.Type.Improvement;
        lifesteal.name = 'Lifesteal';
        lifesteal.numericComponents = descriptiveNumberFactory_1.DescriptiveNumberFactory.get(1);
        lifesteal.namePrefix = 'Leeching';
        lifesteal.description = 'When you hit, heal ' + lifesteal.numericComponents[0].getDescription() + '.';
        lifesteal.powerBonus = function () { return -lifesteal.numericComponents[0].getNumber(); };
        lifesteal.longDescription = '';
        lifesteal.elements = [[modifier_1.Modifier.Element.Holy, modifier_1.Modifier.Element.Shadow, modifier_1.Modifier.Element.Curse, modifier_1.Modifier.Element.Nature].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        mods.push(lifesteal);
        return mods;
    };
    ModifierFactory.get = function (count) {
        return ModifierFactory.getAll().get(count);
    };
    return ModifierFactory;
}());
exports.ModifierFactory = ModifierFactory;
