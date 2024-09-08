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
exports.soulStealingAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var soulStealingAbilityObject = /** @class */ (function (_super) {
    __extends(soulStealingAbilityObject, _super);
    function soulStealingAbilityObject() {
        var _this = _super.call(this, 'Soul Steal') || this;
        _this.description = 'any person you killed or assisted in killing.';
        _this.rarity = 0.5;
        _this.prefix = 'Soul Stealing';
        _this.isCorpse = true;
        return _this;
    }
    return soulStealingAbilityObject;
}(abilityObject_1.AbilityObject));
exports.soulStealingAbilityObject = soulStealingAbilityObject;
