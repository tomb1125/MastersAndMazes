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
exports.mageHumanoidAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var mageHumanoidAbilityObject = /** @class */ (function (_super) {
    __extends(mageHumanoidAbilityObject, _super);
    function mageHumanoidAbilityObject() {
        var _this = _super.call(this, 'Mage') || this;
        _this.description = 'any mage, cleric or practicioner of magic';
        _this.rarity = 0.8;
        _this.prefix = 'Mage';
        _this.isPerson = true;
        return _this;
    }
    return mageHumanoidAbilityObject;
}(abilityObject_1.AbilityObject));
exports.mageHumanoidAbilityObject = mageHumanoidAbilityObject;
