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
exports.dotEffect = void 0;
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var dotEffect = /** @class */ (function (_super) {
    __extends(dotEffect, _super);
    function dotEffect() {
        var _this = _super.call(this) || this;
        var dotInit = [[ability_1.Ability.Element.Physical, 'Bleeding'], [ability_1.Ability.Element.Fire, 'Burning'], [ability_1.Ability.Element.Poison, 'Poisoned']].sort(function () { return 0.5 - utils_1.Utils.random(); })[0];
        _this.value = Math.ceil(utils_1.Utils.DPS * (utils_1.Utils.random()));
        _this.duration = Math.ceil(utils_1.Utils.random() * 3) + 1;
        _this.powerBonus = function (x) { return -_this.value * utils_1.Utils.getDurationCoeficient(_this.duration); }; //this means stun is worth regular DPS damage
        _this.elements = [dotInit[0]];
        _this.name = dotInit[1] + ' ' + _this.value + 'x' + _this.duration;
        _this.namePrefix = dotInit[1];
        _this.description = _this.namePrefix + ' - at the end of each turn target takes ' + _this.value + ' damage, lasts for ' + _this.duration + ' turns.';
        _this.subtype = effect_1.Effect.Subtype.Debuff;
        return _this;
    }
    return dotEffect;
}(effect_1.Effect));
exports.dotEffect = dotEffect;
