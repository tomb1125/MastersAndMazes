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
exports.controllableLightAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var controllableLightAbilityObject = /** @class */ (function (_super) {
    __extends(controllableLightAbilityObject, _super);
    function controllableLightAbilityObject() {
        var _this = _super.call(this, 'Controllable') || this;
        _this.description = 'The light can be moved by 10 meters, disabled or enabled, by a swift action. ';
        _this.rarity = 1.1;
        _this.prefix = 'Controllable';
        _this.isLight = true;
        return _this;
    }
    return controllableLightAbilityObject;
}(abilityObject_1.AbilityObject));
exports.controllableLightAbilityObject = controllableLightAbilityObject;
