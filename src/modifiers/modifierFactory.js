"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var scalingDotEffect_1 = require("./effectRepository/scalingDotEffect");
var factory_1 = require("../core/factory");
var ModifierFactory = /** @class */ (function (_super) {
    __extends(ModifierFactory, _super);
    function ModifierFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new applyEffectModifier_1.applyEffectModifier(affector));
            _this.items.push(new bloodiedModifier_1.bloodiedModifier());
            _this.items.push(new cleaveModifier_1.cleaveModifier());
            _this.items.push(new exhaustingModifer_1.exhaustingModifer());
            _this.items.push(new fastModifier_1.fastModifier());
            _this.items.push(new gainEffectModifier_1.gainEffectModifier(affector));
            _this.items.push(new laylineModifier_1.laylineModifier());
            _this.items.push(new lifestealModifier_1.lifestealModifier());
            _this.items.push(new momentumModifier_1.momentumModifier(affector));
            _this.items.push(new multipleModifer_1.multipleModifier());
            _this.items.push(new nightlyModifier_1.nightlyModifier());
            _this.items.push(new selfHealModifier_1.selfHealModifier(affector));
            _this.items.push(new signatureModifier_1.signatureModifier());
            _this.items.push(new vengefulModifier_1.vengefulModifier());
            _this.items.push(new ultimateModifier_1.ultimateModifier());
            //this.items.push(new repeatableModifier()); //this modifier is excluded for now purposfully. It behaves differently for utilities and for attacks.
            _this.items.push(new scalingDotEffect_1.scalingDotEffect());
        }
        else {
            _this.items = list;
        }
        return _this;
    }
    ModifierFactory.prototype.get = function (count) {
        return _super.prototype.get.call(this, count);
    };
    ModifierFactory.prototype.filter = function (z) {
        return _super.prototype.filter.call(this, z);
    };
    return ModifierFactory;
}(factory_1.Factory));
exports.ModifierFactory = ModifierFactory;
