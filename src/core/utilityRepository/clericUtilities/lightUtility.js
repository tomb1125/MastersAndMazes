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
exports.lightUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var repeatableModifier_1 = require("../../../modifiers/modifiersRepository/repeatableModifier");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var utils_1 = require("../../utils");
var lightUtility = /** @class */ (function (_super) {
    __extends(lightUtility, _super);
    function lightUtility() {
        var _this = _super.call(this, 'Light') || this;
        _this.value = new descriptiveNumber_1.DescriptiveNumber(5);
        _this.range = 10;
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isLight; }).get(1)[0]);
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 1.5
            * utils_1.Utils.getRangeCoeficient(_this.range)
            * utils_1.Utils.getRangeCoeficient(_this.value.getValue());
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        var repeat = new repeatableModifier_1.repeatableModifier();
        repeat.setValue(2);
        _this.modifiers.push(repeat);
        _this.compensate();
        _this.description = 'Using a Swift Action shine a light in an area centered on a point within ' + _this.range + 'm, with a ' + Math.ceil(_this.value.getValue()) + 'm radius, until end of the encounter. ' +
            _this.objects[0].description;
        return _this;
        //TODO add light as an object
    }
    return lightUtility;
}(utility_1.Utility));
exports.lightUtility = lightUtility;
