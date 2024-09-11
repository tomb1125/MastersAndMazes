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
var factory_1 = require("../core/factory");
//factory imports
var vengefulModifier_1 = require("./modifiersRepository/vengefulModifier");
var unlockedModifier_1 = require("./modifiersRepository/unlockedModifier");
var ultimateModifier_1 = require("./modifiersRepository/ultimateModifier");
var signatureModifier_1 = require("./modifiersRepository/signatureModifier");
var selfHealModifier_1 = require("./modifiersRepository/selfHealModifier");
var sneakyModifier_1 = require("./modifiersRepository/rogueModifiers/sneakyModifier");
var luckyModifier_1 = require("./modifiersRepository/rogueModifiers/luckyModifier");
var greedyModifier_1 = require("./modifiersRepository/rogueModifiers/greedyModifier");
var daggerModifier_1 = require("./modifiersRepository/rogueModifiers/daggerModifier");
var cityModifier_1 = require("./modifiersRepository/rogueModifiers/cityModifier");
var restedModifer_1 = require("./modifiersRepository/restedModifer");
var repeatableModifier_1 = require("./modifiersRepository/repeatableModifier");
var piercingModifier_1 = require("./modifiersRepository/piercingModifier");
var opportunistModifier_1 = require("./modifiersRepository/opportunistModifier");
var nightlyModifier_1 = require("./modifiersRepository/nightlyModifier");
var multipleModifier_1 = require("./modifiersRepository/multipleModifier");
var undeadBaneModifier_1 = require("./modifiersRepository/multiclassModifiers/undeadBaneModifier");
var cleanModifier_1 = require("./modifiersRepository/multiclassModifiers/cleanModifier");
var momentumModifier_1 = require("./modifiersRepository/momentumModifier");
var managainModifier_1 = require("./modifiersRepository/managainModifier");
var lifestealModifier_1 = require("./modifiersRepository/lifestealModifier");
var laylineModifier_1 = require("./modifiersRepository/laylineModifier");
var instinctiveModifier_1 = require("./modifiersRepository/instinctiveModifier");
var grazedModifier_1 = require("./modifiersRepository/grazedModifier");
var gainEffectModifier_1 = require("./modifiersRepository/gainEffectModifier");
var forcefulModifier_1 = require("./modifiersRepository/forcefulModifier");
var legendaryWeaponModifier_1 = require("./modifiersRepository/fighterModifiers/legendaryWeaponModifier");
var breachingModifier_1 = require("./modifiersRepository/fighterModifiers/breachingModifier");
var fastModifier_1 = require("./modifiersRepository/fastModifier");
var exhaustingModifer_1 = require("./modifiersRepository/exhaustingModifer");
var templeModifier_1 = require("./modifiersRepository/clericModifiers/templeModifier");
var pristineModifier_1 = require("./modifiersRepository/clericModifiers/pristineModifier");
var preachingModifier_1 = require("./modifiersRepository/clericModifiers/preachingModifier");
var pacifistModifier_1 = require("./modifiersRepository/clericModifiers/pacifistModifier");
var episcopalModifier_1 = require("./modifiersRepository/clericModifiers/episcopalModifier");
var candleModifier_1 = require("./modifiersRepository/clericModifiers/candleModifier");
var cleaveModifier_1 = require("./modifiersRepository/cleaveModifier");
var bloodiedModifier_1 = require("./modifiersRepository/bloodiedModifier");
var applyEffectModifier_1 = require("./modifiersRepository/applyEffectModifier");
var ModifierFactory = /** @class */ (function (_super) {
    __extends(ModifierFactory, _super);
    function ModifierFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new vengefulModifier_1.vengefulModifier(affector));
            _this.items.push(new unlockedModifier_1.unlockedModifier(affector));
            _this.items.push(new ultimateModifier_1.ultimateModifier(affector));
            _this.items.push(new signatureModifier_1.signatureModifier(affector));
            _this.items.push(new selfHealModifier_1.selfHealModifier(affector));
            _this.items.push(new sneakyModifier_1.sneakyModifier(affector));
            _this.items.push(new luckyModifier_1.luckyModifier(affector));
            _this.items.push(new greedyModifier_1.greedyModifier(affector));
            _this.items.push(new daggerModifier_1.daggerModifier(affector));
            _this.items.push(new cityModifier_1.cityModifier(affector));
            _this.items.push(new restedModifer_1.restedModifer(affector));
            _this.items.push(new repeatableModifier_1.repeatableModifier(affector));
            _this.items.push(new piercingModifier_1.piercingModifier(affector));
            _this.items.push(new opportunistModifier_1.opportunistModifier(affector));
            _this.items.push(new nightlyModifier_1.nightlyModifier(affector));
            _this.items.push(new multipleModifier_1.multipleModifier(affector));
            _this.items.push(new undeadBaneModifier_1.undeadBaneModifier(affector));
            _this.items.push(new cleanModifier_1.cleanModifier(affector));
            _this.items.push(new momentumModifier_1.momentumModifier(affector));
            _this.items.push(new managainModifier_1.managainModifier(affector));
            _this.items.push(new lifestealModifier_1.lifestealModifier(affector));
            _this.items.push(new laylineModifier_1.laylineModifier(affector));
            _this.items.push(new instinctiveModifier_1.instinctiveModifier(affector));
            _this.items.push(new grazedModifier_1.grazedModifier(affector));
            _this.items.push(new gainEffectModifier_1.gainEffectModifier(affector));
            _this.items.push(new forcefulModifier_1.forcefulModifier(affector));
            _this.items.push(new legendaryWeaponModifier_1.legendaryWeaponModifier(affector));
            _this.items.push(new breachingModifier_1.breachingModifier(affector));
            _this.items.push(new fastModifier_1.fastModifier(affector));
            _this.items.push(new exhaustingModifer_1.exhaustingModifer(affector));
            _this.items.push(new templeModifier_1.templeModifier(affector));
            _this.items.push(new pristineModifier_1.pristineModifier(affector));
            _this.items.push(new preachingModifier_1.preachingModifier(affector));
            _this.items.push(new pacifistModifier_1.pacifistModifier(affector));
            _this.items.push(new episcopalModifier_1.episcopalModifier(affector));
            _this.items.push(new candleModifier_1.candleModifier(affector));
            _this.items.push(new cleaveModifier_1.cleaveModifier(affector));
            _this.items.push(new bloodiedModifier_1.bloodiedModifier(affector));
            _this.items.push(new applyEffectModifier_1.applyEffectModifier(affector));
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
    ModifierFactory.getDPSBonus = function (modifiers, affector) {
        var dps = 0;
        modifiers.forEach(function (m) {
            if (m.powerBonus) {
                dps += m.powerBonus(affector);
            }
        });
        return dps;
    };
    ModifierFactory.getDPSMultiplier = function (modifiers, affector) {
        var dps = 1;
        modifiers.forEach(function (m) {
            if (m.powerMultiplier) {
                dps *= m.powerMultiplier(affector);
            }
        });
        return dps;
    };
    return ModifierFactory;
}(factory_1.Factory));
exports.ModifierFactory = ModifierFactory;
