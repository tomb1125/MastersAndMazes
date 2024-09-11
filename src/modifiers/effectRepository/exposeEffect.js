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
exports.exposeEffect = void 0;
var utils_1 = require("../../core/utils");
var effect_1 = require("../effect");
var exposeEffect = /** @class */ (function (_super) {
    __extends(exposeEffect, _super);
    function exposeEffect() {
        var _this = _super.call(this) || this;
        _this.value = Math.ceil(utils_1.Utils.random() * 2.2);
        _this.name = 'Expose ' + _this.value;
        _this.namePrefix = 'Exposing';
        _this.description = 'Exposed - when rolling for an ability targeting this creature, any attacker gains ' + _this.value + ' Boons. This effect lasts until end of your next turn. ';
        _this.subtype = effect_1.Effect.Subtype.Debuff;
        _this.powerBonus = function (x) { return -utils_1.Utils.BoonValue * (1 - Math.pow(5 / 6, _this.value)) * utils_1.Utils.AVG_PLAYERS * 0.8; };
        return _this;
    }
    return exposeEffect;
}(effect_1.Effect));
exports.exposeEffect = exposeEffect;
