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
exports.AnimalSpeak = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var modifierFactory_1 = require("../../../modifiers/modifierFactory");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var AnimalSpeak = /** @class */ (function (_super) {
    __extends(AnimalSpeak, _super);
    function AnimalSpeak() {
        var _this = _super.call(this, 'Speak') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Druid) ? 1 : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isCommunication; }).get(1)[0]);
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isAnimal; }).get(1)[0]);
        _this.duration = new descriptiveNumber_1.DescriptiveNumber(1);
        _this.duration.description = 'ten minutes'; //new DescriptiveNumberFactory(this).filter((x: DescriptiveNumber) => x.type === DescriptiveNumber.Type.UtilityDuration).get(1)[0] as DescriptiveNumber;
        _this.chance = 0.5
            / _this.objects[0].rarity
            / _this.objects[1].rarity
            / _this.duration.getValue()
            * modifierFactory_1.ModifierFactory.getDPSMultiplier(_this.modifiers, _this);
        _this.description = 'You can communicate with ' + _this.objects[1].description + ' for ' + _this.duration.getDescription() + '. ' + _this.objects[0].description;
        _this.compensate();
        return _this;
    }
    return AnimalSpeak;
}(utility_1.Utility));
exports.AnimalSpeak = AnimalSpeak;