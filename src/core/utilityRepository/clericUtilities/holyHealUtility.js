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
exports.holyHealUtility = void 0;
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var descriptiveNumberFactory_1 = require("../../../components/descriptiveNumberFactory");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var utils_1 = require("../../utils");
var holyHealUtility = /** @class */ (function (_super) {
    __extends(holyHealUtility, _super);
    function holyHealUtility() {
        var _this = _super.call(this, 'Holy Heal') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        _this.chance = 0.7;
        var normalValue = 10;
        if (!_this.value && utils_1.Utils.random() < utils_1.Utils.ATTACK_DESCRIPTIVE_NUMBER_CHANCE) {
            _this.value = new descriptiveNumberFactory_1.DescriptiveNumberFactory(_this).filter(function (x) { return x.type === descriptiveNumber_1.DescriptiveNumber.Type.Common; }).get(1)[0];
            _this.value.addBonus(Math.ceil(normalValue - _this.value.getValue()));
            console.log(_this.value.getDescription());
            _this.value.compensate();
            console.log(_this.value.getDescription());
            console.log(_this.value.getValue());
        }
        else {
            _this.value = new descriptiveNumber_1.DescriptiveNumber(normalValue);
            console.log('norm' + _this.value.getDescription());
        }
        console.log('val pre' + _this.value.getValue());
        _this.compensate();
        console.log('val post' + _this.value.getValue());
        console.log(_this.value.getDescription());
        _this.description = 'Using Standard Action, restore ' + _this.value.getDescription() + ' health to yourself and one ally within 5 squares. ';
        console.log('========');
        return _this;
    }
    return holyHealUtility;
}(utility_1.Utility));
exports.holyHealUtility = holyHealUtility;
