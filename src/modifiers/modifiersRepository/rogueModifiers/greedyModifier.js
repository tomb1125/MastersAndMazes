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
exports.greedyModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var greedyModifier = /** @class */ (function (_super) {
    __extends(greedyModifier, _super);
    function greedyModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.5; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : 0.2; };
        _this.name = 'Greedy';
        _this.namePrefix = 'Greedy';
        _this.description = 'Can be only used when you obtained 20 or more gold today (or equivalent in goods).';
        _this.longDescription = 'If you took price as a party, count only your share.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return greedyModifier;
}(modifier_1.Modifier));
exports.greedyModifier = greedyModifier;
