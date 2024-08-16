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
exports.revealingLightAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var revealingLightAbilityObject = /** @class */ (function (_super) {
    __extends(revealingLightAbilityObject, _super);
    function revealingLightAbilityObject() {
        var _this = _super.call(this, 'Revealing') || this;
        _this.description = 'The light reveals invisible creatures and illussions. ';
        _this.rarity = 1.4;
        _this.prefix = 'Revealing';
        _this.isLight = true;
        return _this;
    }
    return revealingLightAbilityObject;
}(abilityObject_1.AbilityObject));
exports.revealingLightAbilityObject = revealingLightAbilityObject;
