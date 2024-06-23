"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifiers = void 0;
var modifier_1 = require("./modifier");
var utils_1 = require("../core/utils");
//TODO Make this cleaner
var nightly = new modifier_1.Modifier();
nightly.powerMultiplier = 1.35;
nightly.namePrefix = 'Nightly';
nightly.description = 'Can be used only in the night.';
nightly.longDescription = 'Can be also used on planes without sun.';
nightly.type = modifier_1.Modifier.Type.Constraint;
var bloodied = new modifier_1.Modifier();
bloodied.powerMultiplier = 1.5;
bloodied.namePrefix = 'Bloody';
bloodied.description = 'Can be used only when you have half or less Health.';
bloodied.longDescription = '';
bloodied.type = modifier_1.Modifier.Type.Constraint;
var ultimate = new modifier_1.Modifier();
ultimate.powerMultiplier = 2.5;
ultimate.namePrefix = 'Ultimate';
ultimate.description = 'Can be used on turn 8 or later.';
ultimate.longDescription = '';
ultimate.type = modifier_1.Modifier.Type.Constraint;
var signature = new modifier_1.Modifier();
signature.powerMultiplier = 1.2;
signature.namePrefix = 'Signature';
signature.description = 'Only one player can use Signature power in a single round.';
signature.longDescription = '';
signature.type = modifier_1.Modifier.Type.Constraint;
var layline = new modifier_1.Modifier();
layline.powerMultiplier = 1.7; //TODO should be related to range ZROBIĆ TO INTERFACEM!
layline.namePrefix = 'Layline';
layline.description = 'Can be used while adjacent to place of power.';
layline.longDescription = '';
layline.type = modifier_1.Modifier.Type.Constraint;
var doubleStrike = new modifier_1.Modifier();
doubleStrike.powerMultiplier = 0.4;
doubleStrike.namePrefix = 'Double Strike';
doubleStrike.description = 'After this action, repeat this action once, without paying any costs. You cannot change targets.';
doubleStrike.longDescription = '';
doubleStrike.type = modifier_1.Modifier.Type.Improvement;
var cleave = new modifier_1.Modifier();
cleave.powerMultiplier = 0.5;
cleave.namePrefix = 'Cleave';
cleave.description = 'After this action, repeat this action once, without paying any costs. The repeated action must change the target to an adjacent one to you or initial target.';
cleave.longDescription = '';
cleave.type = modifier_1.Modifier.Type.Improvement;
var fast = new modifier_1.Modifier();
fast.powerMultiplier = 0.5;
fast.namePrefix = 'Fast';
fast.description = 'Once per turn when you use Fast Action, gain Action.';
fast.longDescription = '';
fast.type = modifier_1.Modifier.Type.Improvement;
//TODO
var applyEffect = new modifier_1.Modifier();
applyEffect.powerBonus = utils_1.Utils.DPS - 1;
applyEffect.namePrefix = 'Stun';
applyEffect.description = 'There is a chance to apply effect, when you hit.';
applyEffect.longDescription = '';
applyEffect.type = modifier_1.Modifier.Type.Improvement;
applyEffect.weight = 6;
exports.modifiers = [
    nightly,
    bloodied,
    ultimate,
    signature,
    layline,
    doubleStrike,
    cleave,
    fast,
    applyEffect
];
