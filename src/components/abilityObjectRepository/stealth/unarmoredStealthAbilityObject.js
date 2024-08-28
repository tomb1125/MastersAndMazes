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
exports.unarmoredStealthAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var unarmoredStealthAbilityObject = /** @class */ (function (_super) {
    __extends(unarmoredStealthAbilityObject, _super);
    function unarmoredStealthAbilityObject() {
        var _this = _super.call(this, 'Unarmored Stealth') || this;
        _this.description = 'You cannot wear armor when you use this ability. ';
        _this.rarity = 0.7;
        _this.prefix = 'Unarmored';
        _this.isStealth = true;
        return _this;
    }
    return unarmoredStealthAbilityObject;
}(abilityObject_1.AbilityObject));
exports.unarmoredStealthAbilityObject = unarmoredStealthAbilityObject;
