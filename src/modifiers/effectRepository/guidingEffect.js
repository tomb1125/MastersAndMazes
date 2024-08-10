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
exports.guidingEffect = void 0;
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var guidingEffect = /** @class */ (function (_super) {
    __extends(guidingEffect, _super);
    function guidingEffect() {
        var _this = _super.call(this) || this;
        _this.value = Math.ceil(utils_1.Utils.random() * 2.2);
        _this.duration = Math.ceil(utils_1.Utils.random() * 2 + 0.5);
        _this.name = 'Guide ' + _this.value + 'x' + _this.duration;
        _this.namePrefix = 'Guiding';
        _this.description = 'Guide - when rolling for an Ability chance gain ' + _this.value + ' Boon. This effect lasts for ' + _this.duration + ' turns. ';
        _this.subtype = effect_1.Effect.Subtype.Buff;
        _this.elements = [[ability_1.Ability.Element.Radiant, ability_1.Ability.Element.Emotion].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        _this.powerBonus = function (x) { return -utils_1.Utils.BoonValue * (1 - Math.pow(5 / 6, _this.value)) * utils_1.Utils.getDurationCoeficient(_this.duration); };
        return _this;
    }
    return guidingEffect;
}(effect_1.Effect));
exports.guidingEffect = guidingEffect;
