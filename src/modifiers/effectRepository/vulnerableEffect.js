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
exports.vulnerableEffect = void 0;
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var vulnerableEffect = /** @class */ (function (_super) {
    __extends(vulnerableEffect, _super);
    function vulnerableEffect() {
        var _this = _super.call(this) || this;
        _this.value = Math.ceil(utils_1.Utils.random() * 4) + 1;
        _this.name = 'Vulnerable ' + _this.value;
        _this.namePrefix = 'Vulnerability';
        _this.description = 'Vulnerable ' + _this.value + ' - when taking damage from an Ability deal +' + _this.value + ' bonus damage. This effect lasts for 1 turns. ';
        _this.subtype = effect_1.Effect.Subtype.Debuff;
        _this.powerBonus = function (x) { return -0.5 * _this.value * utils_1.Utils.AVG_PLAYERS * 0.8; };
        return _this;
    }
    return vulnerableEffect;
}(effect_1.Effect));
exports.vulnerableEffect = vulnerableEffect;
