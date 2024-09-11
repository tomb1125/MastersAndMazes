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
exports.poisonedDartAttack = void 0;
var compensationModifier_1 = require("../../../modifiers/modifiersRepository/compensationModifier");
var attack_1 = require("../../attack");
var characterContext_1 = require("../../characterContext");
var poisonedDartAttack = /** @class */ (function (_super) {
    __extends(poisonedDartAttack, _super);
    function poisonedDartAttack(affector) {
        var _this = _super.call(this, 'Poisoned Dart') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 0.4;
        _this.manaCost = 0;
        _this.range = 10;
        _this.coreDescription = 'When you hit, deal damage and apply effect - Rogue\'s Poison which lasts 3 turns. When it expires from duration, target takes 50 damage.';
        _this.subtype = attack_1.Attack.Subtype.Spell;
        _this.initModifiers();
        _this.modifiers.push(new compensationModifier_1.compensationModifier(_this, 'Poisoned Dart', 0, -20));
        _this.initDamage();
        _this.compensate();
        return _this;
    }
    return poisonedDartAttack;
}(attack_1.Attack));
exports.poisonedDartAttack = poisonedDartAttack;
