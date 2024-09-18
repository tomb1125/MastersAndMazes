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
exports.muscleTrainingUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var muscleTrainingUtility = /** @class */ (function (_super) {
    __extends(muscleTrainingUtility, _super);
    function muscleTrainingUtility() {
        var _this = _super.call(this, 'Muscle Training') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isTraining; }).get(1)[0]);
        _this.cooldown = ability_1.Ability.Cooldown.Adventure;
        _this.chance = 0.7;
        _this.value = new descriptiveNumber_1.DescriptiveNumber(10);
        _this.compensate();
        _this.description = 'You can only perform this action when you have access to gymnasium, arena or other traning ground. Until end of Adventure increase your Strenght, Dexterity or Constitution by ' + _this.value.getDescription() + ' (but not above 70). Also gain 1 Experience Point. ' + _this.objects[0].description;
        return _this;
    }
    return muscleTrainingUtility;
}(utility_1.Utility));
exports.muscleTrainingUtility = muscleTrainingUtility;
