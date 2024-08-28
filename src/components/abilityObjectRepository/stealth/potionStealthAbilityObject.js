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
exports.potionStealthAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var potionStealthAbilityObject = /** @class */ (function (_super) {
    __extends(potionStealthAbilityObject, _super);
    function potionStealthAbilityObject() {
        var _this = _super.call(this, 'Potion Stealth') || this;
        _this.description = 'You must drink special Invisibility Potion before using this ability. Each costs 20G and is a rare consumable. When you add this ability to your character gain 5 such potions. ';
        _this.rarity = 1;
        _this.prefix = 'Potion';
        _this.isStealth = true;
        return _this;
    }
    return potionStealthAbilityObject;
}(abilityObject_1.AbilityObject));
exports.potionStealthAbilityObject = potionStealthAbilityObject;
