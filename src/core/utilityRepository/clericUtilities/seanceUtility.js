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
exports.SeanceUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var SeanceUtility = /** @class */ (function (_super) {
    __extends(SeanceUtility, _super);
    function SeanceUtility() {
        var _this = _super.call(this, 'Seance') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isCommunication; }).get(1)[0]);
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isCorpse; }).get(1)[0]);
        _this.duration = new descriptiveNumber_1.DescriptiveNumber(1);
        _this.duration.description = 'ten minutes';
        _this.chance = 0.85
            / _this.objects[0].rarity
            / _this.objects[1].rarity
            / _this.duration.getValue();
        _this.description = 'You can communicate with a nearby, target ' + _this.objects[1].description + ' for ' + _this.duration.getDescription() + '. ' + _this.objects[0].description;
        _this.compensate();
        return _this;
    }
    return SeanceUtility;
}(utility_1.Utility));
exports.SeanceUtility = SeanceUtility;
