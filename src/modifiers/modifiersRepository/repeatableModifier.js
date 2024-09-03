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
exports.repeatableModifier = void 0;
var descriptiveNumber_1 = require("../../components/descriptiveNumber");
var weightedList_1 = require("../../core/weightedList");
var modifier_1 = require("../modifier");
var repeatableModifier = /** @class */ (function (_super) {
    __extends(repeatableModifier, _super);
    function repeatableModifier(affector) {
        var _this = _super.call(this) || this;
        var multiDistribution = new weightedList_1.WeightedList();
        var two = new descriptiveNumber_1.DescriptiveNumber(2);
        two.weight = function () { return 9; };
        var three = new descriptiveNumber_1.DescriptiveNumber(3);
        three.weight = function () { return 3; };
        var four = new descriptiveNumber_1.DescriptiveNumber(4);
        four.weight = function () { return 1; };
        var five = new descriptiveNumber_1.DescriptiveNumber(5);
        five.weight = function () { return 0.333; };
        multiDistribution.items = [two, three, four, five];
        _this.numericComponents = multiDistribution.get(1);
        _this.weight = function (x) { return 0; }; //this modifier is excluded for now purposfully. It behaves differently for utilities and for attacks.
        _this.powerMultiplier = function () { return 1 / _this.numericComponents[0].getValue(); };
        _this.name = 'Repeat ' + _this.numericComponents[0].getValue();
        _this.namePrefix = '';
        _this.description = 'You can use this ability ' + _this.numericComponents[0].getValue() + ' times before it goes on cooldown.';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    repeatableModifier.prototype.setValue = function (x) {
        this.description = this.description.replace(this.numericComponents[0].getValue() + '', x);
        this.namePrefix = this.namePrefix.replace(this.numericComponents[0].getValue() + '', x);
        this.name = this.name.replace(this.numericComponents[0].getValue() + '', x);
        this.numericComponents = [new descriptiveNumber_1.DescriptiveNumber(x)];
    };
    return repeatableModifier;
}(modifier_1.Modifier));
exports.repeatableModifier = repeatableModifier;
