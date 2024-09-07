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
exports.exhaustingModifer = void 0;
var ability_1 = require("../../core/ability");
var modifier_1 = require("../modifier");
var exhaustingModifer = /** @class */ (function (_super) {
    __extends(exhaustingModifer, _super);
    function exhaustingModifer(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 2.5; };
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Utility ? 0.5 : 1; };
        _this.name = 'Exhausting';
        _this.namePrefix = 'Exhausting';
        _this.description = 'After you use this ability, reduce your health to 1.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return exhaustingModifer;
}(modifier_1.Modifier));
exports.exhaustingModifer = exhaustingModifer;
