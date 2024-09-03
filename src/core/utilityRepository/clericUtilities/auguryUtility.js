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
exports.auguryUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var auguryUtility = /** @class */ (function (_super) {
    __extends(auguryUtility, _super);
    function auguryUtility() {
        var numberOfQuestions;
        var _this = _super.call(this, 'Augury') || this;
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isQuestion; }).get(1)[0]);
        _this.cooldown = ability_1.Ability.Cooldown.Adventure;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        var tempChance = 1.5
            / _this.objects[0].rarity;
        if (tempChance > 2) {
            numberOfQuestions = new descriptiveNumber_1.DescriptiveNumber(3);
        }
        else if (tempChance > 1) {
            numberOfQuestions = new descriptiveNumber_1.DescriptiveNumber(2);
        }
        else {
            numberOfQuestions = new descriptiveNumber_1.DescriptiveNumber(1);
        }
        _this.chance = tempChance / numberOfQuestions.getValue();
        _this.description = 'After few minutes of meditation you can ask ' + numberOfQuestions.getValue() + ' question' +
            (numberOfQuestions.getValue() === 1 ? '' : 's') +
            ' to the higher power. ' +
            _this.objects[0].description;
        _this.compensate();
        return _this;
    }
    return auguryUtility;
}(utility_1.Utility));
exports.auguryUtility = auguryUtility;
