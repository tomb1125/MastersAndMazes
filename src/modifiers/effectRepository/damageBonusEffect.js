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
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var damageBonusEffect = /** @class */ (function (_super) {
    __extends(damageBonusEffect, _super);
    function damageBonusEffect() {
        var _this = _super.call(this) || this;
        _this.value = Math.ceil(Math.random() * 4) + 1;
        _this.duration = Math.ceil(Math.random() * 2 + 0.5);
        _this.name = 'Empower ' + _this.value;
        _this.namePrefix = 'Empowering';
        _this.description = 'Empower ' + _this.value + ' - when dealing damage with an Ability deal +' + _this.value + ' bonus damage. This effect lasts for ' + _this.duration + ' turns. ';
        _this.subtype = effect_1.Effect.Subtype.Buff;
        _this.elements = [[ability_1.Ability.Element.Physical, ability_1.Ability.Element.Lightning, ability_1.Ability.Element.Fire, ability_1.Ability.Element.Ice, ability_1.Ability.Element.Dark].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        _this.powerBonus = function (x) { return -_this.value * utils_1.Utils.getDurationCoeficient(_this.duration); };
        return _this;
    }
    return damageBonusEffect;
}(effect_1.Effect));
exports.damageBonusEffect = damageBonusEffect;
