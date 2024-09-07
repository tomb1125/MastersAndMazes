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
exports.retributionEffect = void 0;
var characterContext_1 = require("../../../core/characterContext");
var utils_1 = require("../../../core/utils");
var effect_1 = require("../../effect");
var retributionEffect = /** @class */ (function (_super) {
    __extends(retributionEffect, _super);
    function retributionEffect() {
        var _this = _super.call(this) || this;
        _this.duration = Math.ceil(utils_1.Utils.random() * 2 + 0.5);
        _this.powerBonus = function () { return -utils_1.Utils.ENEMY_DPS * 0.9 * utils_1.Utils.getDurationCoeficient(_this.duration); };
        _this.weight = function () {
            return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ||
                characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Paladin)
                ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER
                : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT;
        };
        _this.name = 'Retribution ' + _this.duration;
        _this.namePrefix = 'Retributive';
        _this.description = 'Retribution - whenever you are dealt damage, the source of the damage immidietly takes the same amount of damage ignoring its resistances. This effect lasts ' + _this.duration + ' turns.';
        _this.subtype = effect_1.Effect.Subtype.Buff;
        return _this;
    }
    return retributionEffect;
}(effect_1.Effect));
exports.retributionEffect = retributionEffect;
