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
exports.radiantRayAttack = void 0;
var compensationModifier_1 = require("../../../modifiers/modifiersRepository/compensationModifier");
var attack_1 = require("../../attack");
var characterContext_1 = require("../../characterContext");
var radiantRayAttack = /** @class */ (function (_super) {
    __extends(radiantRayAttack, _super);
    function radiantRayAttack(affector) {
        var _this = _super.call(this, 'Radiant Flame') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 0.8;
        _this.manaCost = 1;
        _this.range = 10;
        _this.coreDescription = 'When you hit, deal damage and apply effect: Holy Flame - enemy sheds light in 5 squares radius, cannot become invisible and has 1 Bane on all attacks (this Bane does not stack). This effect lasts until end of encounter. ';
        _this.subtype = attack_1.Attack.Subtype.Spell;
        _this.initModifiers();
        _this.modifiers.push(new compensationModifier_1.compensationModifier(_this, 'Radiant Flame', 0.8, 0));
        _this.initDamage();
        _this.compensate();
        return _this;
    }
    return radiantRayAttack;
}(attack_1.Attack));
exports.radiantRayAttack = radiantRayAttack;
