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
exports.blindingLightAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var blindingLightAbilityObject = /** @class */ (function (_super) {
    __extends(blindingLightAbilityObject, _super);
    function blindingLightAbilityObject() {
        var _this = _super.call(this, 'Blinding') || this;
        _this.description = 'All enemies have 1 Bane for attack rolls in this area, this effect does not stack with any other Banes. ';
        _this.rarity = 4;
        _this.prefix = 'Blinding';
        _this.isLight = true;
        return _this;
    }
    return blindingLightAbilityObject;
}(abilityObject_1.AbilityObject));
exports.blindingLightAbilityObject = blindingLightAbilityObject;
