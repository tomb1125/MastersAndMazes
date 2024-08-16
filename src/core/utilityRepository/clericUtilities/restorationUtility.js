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
exports.restorationUtility = void 0;
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var restorationUtility = /** @class */ (function (_super) {
    __extends(restorationUtility, _super);
    function restorationUtility() {
        var _this = _super.call(this, 'Restoration') || this;
        _this.cooldown = ability_1.Ability.Cooldown.Adventure;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? 1 : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 0.6;
        _this.description = 'After an hour of ritual, you can cause wound effects like limb loss, blindness or statistics loss to be removed from one character. Additionally the target loses 1 Scar. You can use this ability in a moderate size city to alternatively gain 150G on success. ';
        _this.compensate();
        return _this;
    }
    return restorationUtility;
}(utility_1.Utility));
exports.restorationUtility = restorationUtility;
