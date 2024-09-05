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
exports.lockpickingUtility = void 0;
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var lockpickingUtility = /** @class */ (function (_super) {
    __extends(lockpickingUtility, _super);
    function lockpickingUtility() {
        var _this = _super.call(this, 'Lockpicking') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.cooldown = ability_1.Ability.Cooldown.Daily;
        _this.chance = 1.5;
        _this.description = 'You can spend some time to open an lock silently and without leaving a trace. ';
        _this.compensate();
        return _this;
    }
    return lockpickingUtility;
}(utility_1.Utility));
exports.lockpickingUtility = lockpickingUtility;
