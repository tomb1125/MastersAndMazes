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
exports.multipleModifier = void 0;
var descriptiveNumber_1 = require("../../components/descriptiveNumber");
var ability_1 = require("../../core/ability");
var weightedList_1 = require("../../core/weightedList");
var modifier_1 = require("../modifier");
var multipleModifier = /** @class */ (function (_super) {
    __extends(multipleModifier, _super);
    function multipleModifier() {
        var _this = _super.call(this) || this;
        var multiDistribution = new weightedList_1.WeightedList();
        var two = new descriptiveNumber_1.DescriptiveNumber(2);
        two.weight = function () { return 9; };
        two.name = 'Double';
        var three = new descriptiveNumber_1.DescriptiveNumber(3);
        three.weight = function () { return 3; };
        three.name = 'Triple';
        var four = new descriptiveNumber_1.DescriptiveNumber(4);
        four.weight = function () { return 1; };
        four.name = 'Quadruple';
        var five = new descriptiveNumber_1.DescriptiveNumber(5);
        five.weight = function () { return 0.33; };
        five.name = 'Quintiple';
        multiDistribution.items = [two, three, four, five];
        _this.numericComponents = multiDistribution.get(1);
        _this.weight = function (x) { return (x === null || x === void 0 ? void 0 : x.type) === ability_1.Ability.Type.Attack ? 1 : 0; };
        _this.powerMultiplier = function () { return 0.8 / _this.numericComponents[0].getValue(); };
        _this.name = 'Multi ' + _this.numericComponents[0].getValue();
        _this.namePrefix = _this.numericComponents[0].name;
        _this.description = 'After this action, repeat this action ' + (_this.numericComponents[0].getValue() - 1) + ' time, without paying mana cost. You cannot change targets.';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    return multipleModifier;
}(modifier_1.Modifier));
exports.multipleModifier = multipleModifier;
