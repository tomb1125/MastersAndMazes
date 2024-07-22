"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifierFactory = void 0;
var weightedList_1 = require("../core/weightedList");
var nightlyModifier_1 = require("./modifiersRepository/nightlyModifier");
var laylineModifier_1 = require("./modifiersRepository/laylineModifier");
var bloodiedModifier_1 = require("./modifiersRepository/bloodiedModifier");
var ultimateModifier_1 = require("./modifiersRepository/ultimateModifier");
var signatureModifier_1 = require("./modifiersRepository/signatureModifier");
var vengefulModifier_1 = require("./modifiersRepository/vengefulModifier");
var momentumModifier_1 = require("./modifiersRepository/momentumModifier");
var exhaustingModifer_1 = require("./modifiersRepository/exhaustingModifer");
var multipleModifer_1 = require("./modifiersRepository/multipleModifer");
var cleaveModifier_1 = require("./modifiersRepository/cleaveModifier");
var fastModifier_1 = require("./modifiersRepository/fastModifier");
var lifestealModifier_1 = require("./modifiersRepository/lifestealModifier");
var applyEffectModifier_1 = require("./modifiersRepository/applyEffectModifier");
var gainEffectModifier_1 = require("./modifiersRepository/gainEffectModifier");
var ModifierFactory = /** @class */ (function () {
    function ModifierFactory() {
    }
    ModifierFactory.getAll = function () {
        var mods = new weightedList_1.WeightedList();
        mods.push(new nightlyModifier_1.nightlyModifier());
        mods.push(new bloodiedModifier_1.bloodiedModifier());
        mods.push(new ultimateModifier_1.ultimateModifier());
        mods.push(new signatureModifier_1.signatureModifier());
        mods.push(new laylineModifier_1.laylineModifier());
        mods.push(new vengefulModifier_1.vengefulModifier());
        mods.push(new momentumModifier_1.momentumModifier());
        mods.push(new exhaustingModifer_1.exhaustingModifer());
        mods.push(new multipleModifer_1.multipleModifier());
        mods.push(new cleaveModifier_1.cleaveModifier());
        mods.push(new fastModifier_1.fastModifier());
        mods.push(new lifestealModifier_1.lifestealModifier());
        mods.push(new applyEffectModifier_1.applyEffectModifier());
        mods.push(new gainEffectModifier_1.gainEffectModifier());
        return mods;
    };
    ModifierFactory.get = function (count) {
        return ModifierFactory.getAll().get(count);
    };
    return ModifierFactory;
}());
exports.ModifierFactory = ModifierFactory;
