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
exports.armoredModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var armoredModifier = /** @class */ (function (_super) {
    __extends(armoredModifier, _super);
    function armoredModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.25; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.name = 'Armored';
        _this.namePrefix = 'Armored';
        _this.description = 'Can only used while you have Armor Points.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return armoredModifier;
}(modifier_1.Modifier));
exports.armoredModifier = armoredModifier;
