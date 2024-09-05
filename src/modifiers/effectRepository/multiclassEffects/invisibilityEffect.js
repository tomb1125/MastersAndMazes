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
exports.invisibilityEffect = void 0;
var characterContext_1 = require("../../../core/characterContext");
var utils_1 = require("../../../core/utils");
var effect_1 = require("../../effect");
var invisibilityEffect = /** @class */ (function (_super) {
    __extends(invisibilityEffect, _super);
    function invisibilityEffect() {
        var _this = _super.call(this) || this;
        _this.duration = Math.ceil(utils_1.Utils.random() * 2 + 0.5);
        _this.powerBonus = function () { return -utils_1.Utils.DPS / 2 * utils_1.Utils.getDurationCoeficient(_this.duration); };
        _this.weight = function () {
            return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ||
                characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Wizard)
                ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER * 1000
                : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT;
        };
        _this.name = 'Invisibilty ' + _this.duration;
        _this.namePrefix = 'Vanishing';
        _this.description = 'Invisibilty - if you moved while invisible, you cannot be targeted by enemies without truesight and are considered hidden until you attack. This effect lasts ' + _this.duration + ' turns.';
        _this.subtype = effect_1.Effect.Subtype.Buff;
        return _this;
    }
    return invisibilityEffect;
}(effect_1.Effect));
exports.invisibilityEffect = invisibilityEffect;
