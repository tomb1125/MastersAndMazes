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
exports.selfHealModifier = void 0;
var descriptiveNumberFactory_1 = require("../../components/descriptiveNumberFactory");
var utils_1 = require("../../core/utils");
var modifier_1 = require("../modifier");
var selfHealModifier = /** @class */ (function (_super) {
    __extends(selfHealModifier, _super);
    function selfHealModifier() {
        var _this = _super.call(this) || this;
        _this.weight = 1000;
        _this.type = modifier_1.Modifier.Type.Improvement;
        _this.name = 'Self Heal';
        _this.numericComponents = descriptiveNumberFactory_1.DescriptiveNumberFactory.get(1);
        _this.namePrefix = 'Healing';
        _this.description = 'When you hit, heal yourself equal to: ' + _this.numericComponents[0].getDescription() + '.';
        _this.powerBonus = function () { return -_this.numericComponents[0].getValue(); };
        _this.longDescription = '';
        _this.elements = [[modifier_1.Modifier.Element.Holy, modifier_1.Modifier.Element.Shadow, modifier_1.Modifier.Element.Curse, modifier_1.Modifier.Element.Nature].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        return _this;
    }
    return selfHealModifier;
}(modifier_1.Modifier));
exports.selfHealModifier = selfHealModifier;
