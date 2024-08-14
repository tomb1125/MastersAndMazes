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
exports.ultimateModifier = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var ultimateModifier = /** @class */ (function (_super) {
    __extends(ultimateModifier, _super);
    function ultimateModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 2.5; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.name = 'Ultimate';
        _this.namePrefix = 'Ultimate'; //numeric component
        _this.description = 'Can be used only on turn 8 or later.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return ultimateModifier;
}(modifier_1.Modifier));
exports.ultimateModifier = ultimateModifier;
