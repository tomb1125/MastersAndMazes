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
exports.shadowMeldUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var shadowMeldUtility = /** @class */ (function (_super) {
    __extends(shadowMeldUtility, _super);
    function shadowMeldUtility() {
        var _this = _super.call(this, 'Shadow Meld') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isStealth; }).get(1)[0]);
        _this.cooldown = ability_1.Ability.Cooldown.Daily;
        _this.chance = 1.6;
        _this.description = 'You slowly becoome almost undetectable, this effect lasts until you move. ' + _this.objects[0].description;
        _this.compensate();
        return _this;
    }
    return shadowMeldUtility;
}(utility_1.Utility));
exports.shadowMeldUtility = shadowMeldUtility;
