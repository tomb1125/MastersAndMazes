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
exports.shadowStealthAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var shadowStealthAbilityObject = /** @class */ (function (_super) {
    __extends(shadowStealthAbilityObject, _super);
    function shadowStealthAbilityObject() {
        var _this = _super.call(this, 'Shadow Stealth') || this;
        _this.description = 'You cannot cross any well lit path or this ability fails (one torch is not enough to well lit area though). ';
        _this.rarity = 2;
        _this.prefix = 'Shadow';
        _this.isStealth = true;
        return _this;
    }
    return shadowStealthAbilityObject;
}(abilityObject_1.AbilityObject));
exports.shadowStealthAbilityObject = shadowStealthAbilityObject;
