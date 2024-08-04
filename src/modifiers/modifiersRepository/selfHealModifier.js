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
var ability_1 = require("../../core/ability");
var utils_1 = require("../../core/utils");
var modifier_1 = require("../modifier");
var selfHealModifier = /** @class */ (function (_super) {
    __extends(selfHealModifier, _super);
    function selfHealModifier() {
        var _this = _super.call(this) || this;
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        _this.name = 'Self Heal';
        _this.numericComponents = descriptiveNumberFactory_1.DescriptiveNumberFactory.get(1);
        _this.namePrefix = 'Healing';
        _this.description = 'When you hit, heal yourself equal to: ' + _this.numericComponents[0].getDescription() + '.';
        _this.powerBonus = function () { return -_this.numericComponents[0].getValue(); };
        _this.longDescription = '';
        _this.elements = [[ability_1.Ability.Element.Radiant, ability_1.Ability.Element.Dark, ability_1.Ability.Element.Emotion].sort(function () { return 0.5 - utils_1.Utils.random(); })[1]];
        return _this;
    }
    return selfHealModifier;
}(modifier_1.Modifier));
exports.selfHealModifier = selfHealModifier;
