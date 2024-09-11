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
exports.normalMovementAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var normalMovementAbilityObject = /** @class */ (function (_super) {
    __extends(normalMovementAbilityObject, _super);
    function normalMovementAbilityObject() {
        var _this = _super.call(this, 'Normal Movement') || this;
        _this.description = '';
        _this.rarity = 1;
        _this.weight = function () { return 1; };
        _this.prefix = '';
        _this.isMovement = true;
        return _this;
    }
    return normalMovementAbilityObject;
}(abilityObject_1.AbilityObject));
exports.normalMovementAbilityObject = normalMovementAbilityObject;
