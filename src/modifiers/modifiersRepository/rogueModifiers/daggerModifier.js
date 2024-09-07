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
exports.daggerModifier = void 0;
var ability_1 = require("../../../core/ability");
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var daggerModifier = /** @class */ (function (_super) {
    __extends(daggerModifier, _super);
    function daggerModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.3; };
        _this.weight = function (affector) {
            return affector != undefined && affector.type === ability_1.Ability.Type.Attack
                ? characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue)
                    ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER
                    : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT
                : 0;
        };
        _this.name = 'Dagger';
        _this.namePrefix = 'Stabbing';
        _this.description = 'This ability can be only used when you are wielding a dagger.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return daggerModifier;
}(modifier_1.Modifier));
exports.daggerModifier = daggerModifier;
