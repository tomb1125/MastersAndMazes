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
exports.lifestealModifier = void 0;
var descriptiveNumberFactory_1 = require("../../components/descriptiveNumberFactory");
var utils_1 = require("../../core/utils");
var modifier_1 = require("../modifier");
var lifestealModifier = /** @class */ (function (_super) {
    __extends(lifestealModifier, _super);
    function lifestealModifier() {
        var _this = _super.call(this) || this;
        _this.weight = 1;
        _this.type = modifier_1.Modifier.Type.Improvement;
        _this.name = 'Lifesteal';
        _this.numericComponents = descriptiveNumberFactory_1.DescriptiveNumberFactory.get(1);
        _this.namePrefix = 'Leeching';
        _this.description = 'When you hit, heal yourself equal to: ' + _this.numericComponents[0].getDescription() + '.';
        _this.powerBonus = function () { return -_this.numericComponents[0].getValue(); };
        _this.longDescription = '';
        _this.elements = [[modifier_1.Modifier.Element.Holy, modifier_1.Modifier.Element.Shadow, modifier_1.Modifier.Element.Curse, modifier_1.Modifier.Element.Nature].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        return _this;
    }
    return lifestealModifier;
}(modifier_1.Modifier));
exports.lifestealModifier = lifestealModifier;
