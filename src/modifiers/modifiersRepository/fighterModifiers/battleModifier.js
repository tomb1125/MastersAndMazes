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
exports.battleModifier = void 0;
var ability_1 = require("../../../core/ability");
var characterContext_1 = require("../../../core/characterContext");
var utils_1 = require("../../../core/utils");
var modifier_1 = require("../../modifier");
var battleModifier = /** @class */ (function (_super) {
    __extends(battleModifier, _super);
    function battleModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.5; };
        _this.weight = function (affector) {
            return affector != undefined && affector.type === ability_1.Ability.Type.Attack
                ? characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter)
                    ? utils_1.Utils.RARE_MODIFIER * characterContext_1.CharacterContext.IN_CLASS_MODIFIER
                    : utils_1.Utils.RARE_MODIFIER * characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT
                : 0;
        };
        _this.name = 'Battle';
        _this.namePrefix = 'Battle';
        _this.description = 'Can only be used when you are adjacent to two enemies.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return battleModifier;
}(modifier_1.Modifier));
exports.battleModifier = battleModifier;
