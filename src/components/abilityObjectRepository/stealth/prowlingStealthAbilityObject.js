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
exports.prowlingStealthAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var prowlingStealthAbilityObject = /** @class */ (function (_super) {
    __extends(prowlingStealthAbilityObject, _super);
    function prowlingStealthAbilityObject() {
        var _this = _super.call(this, 'Prowling Stealth') || this;
        _this.description = 'First attack you make within 10 minutes of using this ability deals +10 bonus damage. ';
        _this.rarity = 1.6;
        _this.prefix = 'Prowling';
        _this.isStealth = true;
        return _this;
    }
    return prowlingStealthAbilityObject;
}(abilityObject_1.AbilityObject));
exports.prowlingStealthAbilityObject = prowlingStealthAbilityObject;
