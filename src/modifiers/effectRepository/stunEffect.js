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
exports.stunEffect = void 0;
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var stunEffect = /** @class */ (function (_super) {
    __extends(stunEffect, _super);
    function stunEffect() {
        var _this = _super.call(this) || this;
        _this.powerBonus = function () { return -1.5 * utils_1.Utils.getDPS(1); };
        _this.name = 'Stun';
        _this.namePrefix = 'Stunning';
        _this.description = 'Stunned - character cannot take actions. Stunned ends at the end of a turn.';
        _this.subtype = effect_1.Effect.Subtype.Debuff;
        _this.elements = [[ability_1.Ability.Element.Physical, ability_1.Ability.Element.Ice].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        return _this;
    }
    return stunEffect;
}(effect_1.Effect));
exports.stunEffect = stunEffect;
