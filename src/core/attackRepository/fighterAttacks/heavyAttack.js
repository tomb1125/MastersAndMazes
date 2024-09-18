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
exports.heavyAttack = void 0;
var compensationModifier_1 = require("../../../modifiers/modifiersRepository/compensationModifier");
var attack_1 = require("../../attack");
var characterContext_1 = require("../../characterContext");
var heavyAttack = /** @class */ (function (_super) {
    __extends(heavyAttack, _super);
    function heavyAttack(affector) {
        var _this = _super.call(this, 'Heavy Strike') || this;
        _this.subtype = attack_1.Attack.Subtype.Weapon;
        _this.coreDescription = 'When you hit, deal damage. This power treats any bonuses to damage, from Abilities and Weapons, as doubled. ';
        _this.chance = 0.3;
        _this.manaCost = 0;
        _this.range = 1;
        _this.subtype = attack_1.Attack.Subtype.Weapon;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.initModifiers();
        _this.modifiers.push(new compensationModifier_1.compensationModifier(_this, 'Heavy', 0, -2));
        _this.initDamage();
        _this.generate();
        return _this;
    }
    return heavyAttack;
}(attack_1.Attack));
exports.heavyAttack = heavyAttack;
