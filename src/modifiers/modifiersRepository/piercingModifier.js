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
exports.piercingModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var piercingModifier = /** @class */ (function (_super) {
    __extends(piercingModifier, _super);
    function piercingModifier(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 0.8; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.name = 'Piercing';
        _this.namePrefix = 'Piercing';
        _this.description = 'When you hit deal damage to Health directly, additionally reduce enemy Armor by the same value. ';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    return piercingModifier;
}(modifier_1.Modifier));
exports.piercingModifier = piercingModifier;
