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
exports.undeadBaneModifier = void 0;
var ability_1 = require("../../../core/ability");
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var undeadBaneModifier = /** @class */ (function (_super) {
    __extends(undeadBaneModifier, _super);
    function undeadBaneModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 0.95; };
        _this.weight = function (affector) {
            return affector != undefined && affector.type === ability_1.Ability.Type.Attack
                ? characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ||
                    characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Paladin)
                    ? 1
                    : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT
                : 0;
        };
        _this.name = "Undead Bane";
        _this.namePrefix = "Baning Undead";
        _this.description =
            "If this targets an undead, demon or devil repeat the attack once.";
        _this.longDescription = "";
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    return undeadBaneModifier;
}(modifier_1.Modifier));
exports.undeadBaneModifier = undeadBaneModifier;
