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
exports.applyEffectModifier = void 0;
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var effectFactory_1 = require("../effectFactory");
var modifier_1 = require("../modifier");
var applyEffectModifier = /** @class */ (function (_super) {
    __extends(applyEffectModifier, _super);
    function applyEffectModifier(aff) {
        var _this = this;
        var debuffFactory = new effectFactory_1.EffectFactory(aff).filter(function (eff) { return eff.subtype === effect_1.Effect.Subtype.Debuff; });
        _this = _super.call(this) || this;
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? debuffFactory.items.items.length * utils_1.Utils.EFFECT_WEIGHT_MOD * utils_1.Utils.COMMON_MODIFIER : 0; };
        _this.effect = debuffFactory.get(1)[0];
        _this.description = 'When you hit, apply effect: ' + _this.effect.description;
        _this.namePrefix = _this.effect.namePrefix;
        _this.name = 'Apply ' + _this.effect.name;
        _this.powerBonus = function (x) { return x.chance != null && x.range != null ? x.chance / utils_1.Utils.getRangeCoeficient(x.range) * _this.effect.powerBonus(x) : -1000000; };
        _this.powerMultiplier = function (x) { return _this.effect.powerMultiplier(x); }; //TODO test if true
        return _this;
    }
    return applyEffectModifier;
}(modifier_1.Modifier));
exports.applyEffectModifier = applyEffectModifier;
