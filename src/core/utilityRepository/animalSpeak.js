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
var abilityObjectFactory_1 = require("../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../components/descriptiveNumber");
var descriptiveNumberFactory_1 = require("../../components/descriptiveNumberFactory");
var utility_1 = require("../utility");
var AnimalSpeak = /** @class */ (function (_super) {
    __extends(AnimalSpeak, _super);
    function AnimalSpeak() {
        var _this = _super.call(this, 'Speak') || this;
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isAnimal; }).get(1)[0]);
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isCommunication; }).get(1)[0]);
        _this.duration = new descriptiveNumberFactory_1.DescriptiveNumberFactory(_this).filter(function (x) { return x.type === descriptiveNumber_1.DescriptiveNumber.Type.UtilityDuration; }).get(1)[0];
        _this.chance = 0.6
            / _this.objects[0].rarity
            / _this.objects[1].rarity
            / _this.duration.getValue();
        _this.description = 'You can communicate with ' + _this.objects[0].description + ' for ' + _this.duration.getDescription() + '. ' + _this.objects[1].description;
        _this.compensate();
        return _this;
    }
    return AnimalSpeak;
}(utility_1.Utility));
exports.AnimalSpeak = AnimalSpeak;
