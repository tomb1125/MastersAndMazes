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
exports.followupModifier = void 0;
var ability_1 = require("../../../core/ability");
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var followupModifier = /** @class */ (function (_super) {
    __extends(followupModifier, _super);
    function followupModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 0.75; };
        _this.weight = function (affector) {
            return affector != undefined && affector.type === ability_1.Ability.Type.Attack
                ? characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter)
                    ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER
                    : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT
                : 0;
        };
        _this.name = 'Followup';
        _this.namePrefix = 'Followup';
        _this.description = 'If the target wasn\'t bloodied as you made this attack and became bloodied after hit, you can repeat this attack against this target.';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    return followupModifier;
}(modifier_1.Modifier));
exports.followupModifier = followupModifier;
