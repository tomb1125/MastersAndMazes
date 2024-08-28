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
exports.protectedEffect = void 0;
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var protectedEffect = /** @class */ (function (_super) {
    __extends(protectedEffect, _super);
    function protectedEffect() {
        var _this = _super.call(this) || this;
        _this.value = Math.ceil(utils_1.Utils.DPS * (utils_1.Utils.random()));
        _this.duration = Math.ceil(utils_1.Utils.random() * 3) + 1;
        _this.weight = function () { return 1000; };
        _this.powerBonus = function (x) { return -utils_1.Utils.ENEMY_DPS * 3 / 10 * utils_1.Utils.getDurationCoeficient(_this.duration); };
        _this.name = 'Protection ' + _this.duration;
        _this.namePrefix = 'Protecting';
        _this.description = _this.namePrefix + ' - whenever you take damage and/or are affected by an enemy, roll D10, on 8-0 you ignore this damage/effect. This lasts for ' + _this.duration + ' turns.';
        _this.subtype = effect_1.Effect.Subtype.Buff;
        return _this;
    }
    return protectedEffect;
}(effect_1.Effect));
exports.protectedEffect = protectedEffect;
