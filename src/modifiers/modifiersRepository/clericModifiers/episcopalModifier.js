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
exports.episcopalModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var utils_1 = require("../../../core/utils");
var modifier_1 = require("../../modifier");
var episcopalModifier = /** @class */ (function (_super) {
    __extends(episcopalModifier, _super);
    function episcopalModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 2.7; };
        _this.weight = function () { return utils_1.Utils.RARE_MODIFIER * (characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT); };
        _this.name = 'Episcopal';
        _this.namePrefix = 'Episcopal';
        _this.description = 'Can be only used if you are a Bishop or you were personally blessed by a pope.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return episcopalModifier;
}(modifier_1.Modifier));
exports.episcopalModifier = episcopalModifier;
