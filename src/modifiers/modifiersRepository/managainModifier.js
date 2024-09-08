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
exports.managainModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var managainModifier = /** @class */ (function (_super) {
    __extends(managainModifier, _super);
    function managainModifier(affector) {
        var _this = _super.call(this) || this;
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.name = 'Mana Gain';
        _this.namePrefix = 'Mana Leeching';
        _this.description = 'When you hit, gain mana equal to damage taken by enemy.';
        _this.powerMultiplier = function (x) { return 0.75; };
        _this.longDescription = '';
        return _this;
    }
    return managainModifier;
}(modifier_1.Modifier));
exports.managainModifier = managainModifier;
