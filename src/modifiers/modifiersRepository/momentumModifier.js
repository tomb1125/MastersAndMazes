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
exports.momentumModifier = void 0;
var descriptiveNumberFactory_1 = require("../../components/descriptiveNumberFactory");
var modifier_1 = require("../modifier");
var momentumModifier = /** @class */ (function (_super) {
    __extends(momentumModifier, _super);
    function momentumModifier(affector) {
        var _this = _super.call(this) || this;
        _this.name = 'Inertia';
        _this.numericComponents = new descriptiveNumberFactory_1.DescriptiveNumberFactory(affector).filter(function (x) { return x.name === 'D4'; }).get(1);
        _this.namePrefix = 'Inertia';
        _this.description = 'Can be only used when you fail chance roll with ' + _this.numericComponents[0].getValue() + ' ' + (_this.numericComponents[0].getValue() === 1 ? 'ability' : 'abilities') + ' in a row. '; //TODO better wording when 1
        _this.longDescription = '';
        _this.powerMultiplier = function (x) { return Math.pow(1.58, _this.numericComponents[0].getValue()); };
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return momentumModifier;
}(modifier_1.Modifier));
exports.momentumModifier = momentumModifier;
