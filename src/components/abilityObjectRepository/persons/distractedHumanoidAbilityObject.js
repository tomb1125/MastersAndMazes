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
exports.distractedHumanoidAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var distractedHumanoidAbilityObject = /** @class */ (function (_super) {
    __extends(distractedHumanoidAbilityObject, _super);
    function distractedHumanoidAbilityObject() {
        var _this = _super.call(this, 'Distracted Humanoid') || this;
        _this.description = 'any distracted humanoid';
        _this.rarity = 1.2;
        _this.prefix = 'Distracted';
        _this.isPerson = true;
        return _this;
    }
    return distractedHumanoidAbilityObject;
}(abilityObject_1.AbilityObject));
exports.distractedHumanoidAbilityObject = distractedHumanoidAbilityObject;
