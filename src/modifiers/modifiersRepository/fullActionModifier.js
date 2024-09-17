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
exports.fullActionModifier = void 0;
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var modifier_1 = require("../modifier");
var fullActionModifier = /** @class */ (function (_super) {
    __extends(fullActionModifier, _super);
    function fullActionModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerBonus = function () { return 2; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.cooldown) === ability_1.Ability.Cooldown.Encounter ? 0.75 * utils_1.Utils.COMMON_MODIFIER : 0; };
        _this.name = 'Full Action';
        _this.namePrefix = 'Stationary';
        _this.description = 'You must additionally use Move Action to use this power.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return fullActionModifier;
}(modifier_1.Modifier));
exports.fullActionModifier = fullActionModifier;
