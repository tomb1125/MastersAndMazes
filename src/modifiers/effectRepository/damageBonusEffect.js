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
exports.damageBonusEffect = void 0;
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var modifier_1 = require("../modifier");
var damageBonusEffect = /** @class */ (function (_super) {
    __extends(damageBonusEffect, _super);
    function damageBonusEffect() {
        var _this = _super.call(this) || this;
        _this.value = Math.ceil(Math.random() * 4) + 1;
        _this.duration = Math.ceil(Math.random() * 2 + 0.5);
        _this.name = 'Empower';
        _this.namePrefix = 'Empowering';
        _this.description = 'Empower - when dealing damage with an Ability deal ' + _this.value + ' bonus damage. This effect lasts for ' + _this.duration + ' turns. ';
        _this.subtype = effect_1.Effect.Subtype.Buff;
        _this.elements = [[modifier_1.Modifier.Element.Physical, modifier_1.Modifier.Element.Lightning, modifier_1.Modifier.Element.Fire, modifier_1.Modifier.Element.Ice, modifier_1.Modifier.Element.Shadow].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        _this.powerBonus = function (x) { return -_this.value * utils_1.Utils.getDurationCoeficient(_this.duration); };
        return _this;
    }
    return damageBonusEffect;
}(effect_1.Effect));
exports.damageBonusEffect = damageBonusEffect;
