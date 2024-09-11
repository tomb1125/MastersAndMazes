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
exports.empoweringStrikeAttack = void 0;
var compensationModifier_1 = require("../../../modifiers/modifiersRepository/compensationModifier");
var attack_1 = require("../../attack");
var characterContext_1 = require("../../characterContext");
var empoweringStrikeAttack = /** @class */ (function (_super) {
    __extends(empoweringStrikeAttack, _super);
    function empoweringStrikeAttack(affector) {
        var _this = _super.call(this, 'Empowering Strike') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 0.3;
        _this.manaCost = 1;
        _this.range = 10;
        _this.coreDescription = 'When you hit, deal damage and gain 5 Righteus Lights until end of the encounter. You and each ally within 10 squares can use one of the lights with a Swift Action to either heal 5 Health or gain 1 Boon on nearest chance roll. ';
        _this.subtype = attack_1.Attack.Subtype.Spell;
        _this.initModifiers();
        _this.modifiers.push(new compensationModifier_1.compensationModifier(_this, 'Righteus Lights', 0, -15));
        _this.initDamage();
        _this.compensate();
        return _this;
    }
    return empoweringStrikeAttack;
}(attack_1.Attack));
exports.empoweringStrikeAttack = empoweringStrikeAttack;
