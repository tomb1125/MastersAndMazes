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
exports.gainEffectModifier = void 0;
var ability_1 = require("../../core/ability");
var effect_1 = require("../effect");
var effectFactory_1 = require("../effectFactory");
var modifier_1 = require("../modifier");
var gainEffectModifier = /** @class */ (function (_super) {
    __extends(gainEffectModifier, _super);
    function gainEffectModifier(aff) {
        var _this = _super.call(this) || this;
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 4 : 0; };
        _this.effect = new effectFactory_1.EffectFactory(aff).filter(function (eff) { return eff.subtype === effect_1.Effect.Subtype.Buff; }).get(1)[0];
        _this.description = 'When you hit, gain an effect: ' + _this.effect.description;
        _this.namePrefix = _this.effect.namePrefix;
        _this.name = 'Gain ' + _this.effect.name;
        _this.powerBonus = function (x) { return x.chance != null ? x.chance * _this.effect.powerBonus(x) : -100000; };
        _this.powerMultiplier = function (x) { return _this.effect.powerMultiplier(x); }; //TODO test if true
        return _this;
    }
    return gainEffectModifier;
}(modifier_1.Modifier));
exports.gainEffectModifier = gainEffectModifier;
