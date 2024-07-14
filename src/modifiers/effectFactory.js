"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectFactory = void 0;
var utils_1 = require("../core/utils");
var weightedList_1 = require("../core/weightedList");
var modifier_1 = require("./modifier");
var effect_1 = require("./effect");
var EffectFactory = /** @class */ (function () {
    function EffectFactory() {
    }
    EffectFactory.getAll = function () {
        var eff = new weightedList_1.WeightedList();
        var stun = new effect_1.Effect();
        stun.powerBonus = function () { return -utils_1.Utils.DPS; };
        stun.name = 'Stun';
        stun.namePrefix = 'Stunning';
        stun.description = 'Stunned - character cannot take actions. Stunned ends at the end of a turn.';
        stun.subtype = effect_1.Effect.Subtype.Debuff;
        stun.elements = [[modifier_1.Modifier.Element.Physical, modifier_1.Modifier.Element.Ice].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        eff.push(stun);
        var eviscerate = new effect_1.Effect();
        eviscerate.powerBonus = function () { return -1000; };
        eviscerate.weight = 0.1;
        eviscerate.namePrefix = 'Mortal';
        eviscerate.description = 'Instakill - if applied successfully, character dies.';
        eviscerate.subtype = effect_1.Effect.Subtype.Debuff;
        eviscerate.elements = [[modifier_1.Modifier.Element.Physical, modifier_1.Modifier.Element.Shadow, modifier_1.Modifier.Element.Curse, modifier_1.Modifier.Element.Nature].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        eff.push(eviscerate);
        var dotInit = [[modifier_1.Modifier.Element.Physical, 'Bleeding'], [modifier_1.Modifier.Element.Fire, 'Burning'], [modifier_1.Modifier.Element.Curse, 'Diseased']].sort(function () { return 0.5 - utils_1.Utils.random(); })[0];
        var dot = new effect_1.Effect();
        dot.value = Math.ceil(utils_1.Utils.DPS * (Math.random()));
        dot.duration = Math.ceil(Math.random() * 3) + 1;
        dot.powerBonus = function (x) { var _a; return -dot.value * dot.duration * 0.5 * ((_a = x.chance) !== null && _a !== void 0 ? _a : 1); }; //this means stun is worth regular DPS damage
        dot.elements = [dotInit[0]];
        dot.namePrefix = dotInit[1];
        dot.description = dot.namePrefix + ' - at the end of each turn take ' + dot.value + ' damage, lasts for ' + dot.duration + ' turns.';
        dot.subtype = effect_1.Effect.Subtype.Debuff;
        eff.push(dot);
        var accuracy = new effect_1.Effect();
        accuracy.powerBonus = function () { return -utils_1.Utils.DPS; };
        accuracy.weight = 100;
        accuracy.duration = Math.ceil(Math.random() * 3) + 1;
        accuracy.name = 'Accuracy';
        accuracy.namePrefix = 'Accurate';
        accuracy.description = 'Accuract - when making attacks gain 1 Boon, lasts for ' + accuracy.description + 'turns. ';
        accuracy.subtype = effect_1.Effect.Subtype.Buff;
        accuracy.elements = [[modifier_1.Modifier.Element.Physical, modifier_1.Modifier.Element.Ice].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        eff.push(accuracy);
        return eff;
    };
    EffectFactory.get = function (count) {
        return EffectFactory.getAll().get(count);
    };
    return EffectFactory;
}());
exports.EffectFactory = EffectFactory;
