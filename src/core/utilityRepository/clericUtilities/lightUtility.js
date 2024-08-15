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
exports.Light = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var modifierFactory_1 = require("../../../modifiers/modifierFactory");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var utils_1 = require("../../utils");
var Light = /** @class */ (function (_super) {
    __extends(Light, _super);
    function Light() {
        var _this = this;
        var range = new descriptiveNumber_1.DescriptiveNumber(utils_1.Utils.D(3) * 5);
        var radius = new descriptiveNumber_1.DescriptiveNumber(utils_1.Utils.D(3) * 5);
        _this = _super.call(this, 'Light') || this;
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isLight; }).get(1)[0]);
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? 1 : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 1.5
            * utils_1.Utils.getRangeCoeficient(range.getValue())
            * utils_1.Utils.getRangeCoeficient(radius.getValue())
            * modifierFactory_1.ModifierFactory.getDPSMultiplier(_this.modifiers, _this); //TODO move to compensate
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        _this.description = 'Using a Swift Action shine a light in an area centered on a point within ' + range.getValue() + 'm, with a ' + radius.getValue() + 'm radius, until end of the encounter. ' +
            _this.objects[0].description;
        //TODO add light as an object
        _this.compensate();
        return _this;
    }
    return Light;
}(utility_1.Utility));
exports.Light = Light;
