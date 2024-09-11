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
exports.luckyModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var luckyModifier = /** @class */ (function (_super) {
    __extends(luckyModifier, _super);
    function luckyModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.4; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.name = 'Trinket';
        _this.namePrefix = 'Trinket';
        _this.description = 'When you add this ability to your character you gain "Lucky Coin", "Favourite Hat" or similar trinket (unless they have one). You cannot use this ability if you lose this trinket.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return luckyModifier;
}(modifier_1.Modifier));
exports.luckyModifier = luckyModifier;
