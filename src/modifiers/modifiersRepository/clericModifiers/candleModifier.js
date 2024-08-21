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
exports.candleModifier = void 0;
var characterContext_1 = require("../../../core/characterContext");
var modifier_1 = require("../../modifier");
var candleModifier = /** @class */ (function (_super) {
    __extends(candleModifier, _super);
    function candleModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.3; };
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.name = 'Candle';
        _this.namePrefix = 'Candle';
        _this.description = 'Can be only used in a circle of lit candles.';
        _this.longDescription = 'Circle doesn\t have to be perfect at all. 1 Gold of candles is enough to draw 1 meter of a "candle line". You can carry 50 Gold worth of candles in your backpack. Enemies can use an Action to damage 1 meter of a "candle line" or destry damaged line.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return candleModifier;
}(modifier_1.Modifier));
exports.candleModifier = candleModifier;
