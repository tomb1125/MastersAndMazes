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
var selfHealModifier_1 = require("./modifiersRepository/selfHealModifier");
var applyEffectModifier_1 = require("./modifiersRepository/applyEffectModifier");
var gainEffectModifier_1 = require("./modifiersRepository/gainEffectModifier");
var lifestealModifier_1 = require("./modifiersRepository/lifestealModifier");
var ModifierFactory = /** @class */ (function () {
    function ModifierFactory(list) {
        if (list === undefined) {
            this.modifiers = new weightedList_1.WeightedList();
            this.modifiers.push(new nightlyModifier_1.nightlyModifier());
            this.modifiers.push(new bloodiedModifier_1.bloodiedModifier());
            this.modifiers.push(new ultimateModifier_1.ultimateModifier());
            this.modifiers.push(new signatureModifier_1.signatureModifier());
            this.modifiers.push(new laylineModifier_1.laylineModifier());
            this.modifiers.push(new vengefulModifier_1.vengefulModifier());
            this.modifiers.push(new momentumModifier_1.momentumModifier());
            this.modifiers.push(new exhaustingModifer_1.exhaustingModifer());
            this.modifiers.push(new multipleModifer_1.multipleModifier());
            this.modifiers.push(new cleaveModifier_1.cleaveModifier());
            this.modifiers.push(new fastModifier_1.fastModifier());
            this.modifiers.push(new selfHealModifier_1.selfHealModifier());
            this.modifiers.push(new applyEffectModifier_1.applyEffectModifier());
            this.modifiers.push(new gainEffectModifier_1.gainEffectModifier());
            this.modifiers.push(new lifestealModifier_1.lifestealModifier());
        }
        else {
            this.modifiers = list;
        }
    }
    ModifierFactory.prototype.getAll = function () {
        return this.modifiers;
    };
    ModifierFactory.prototype.get = function (count) {
        return this.modifiers.get(count);
    };
    ModifierFactory.prototype.filter = function (z) {
        this.modifiers = this.modifiers.filter(z);
        return this;
    };
    return ModifierFactory;
}());
exports.ModifierFactory = ModifierFactory;
