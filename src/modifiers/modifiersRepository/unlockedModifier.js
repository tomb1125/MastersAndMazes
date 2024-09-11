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
exports.unlockedModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var unlockedModifier = /** @class */ (function (_super) {
    __extends(unlockedModifier, _super);
    function unlockedModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.65; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.cooldown) === ability_1.Ability.Cooldown.Encounter ? 1 : 0; };
        _this.name = 'Unlock';
        _this.namePrefix = 'Unlocked';
        _this.description = 'Can only be used when you roll 01-20 on your first D100 roll last turn. ';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return unlockedModifier;
}(modifier_1.Modifier));
exports.unlockedModifier = unlockedModifier;
