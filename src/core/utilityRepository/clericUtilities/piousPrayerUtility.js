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
exports.piousPrayerUtility = void 0;
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var piousPrayerUtility = /** @class */ (function (_super) {
    __extends(piousPrayerUtility, _super);
    function piousPrayerUtility() {
        var _this = _super.call(this, 'Prayer') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Cleric) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        _this.chance = 0.7;
        var normalValue = 7;
        _this.value = new descriptiveNumber_1.DescriptiveNumber(normalValue);
        _this.compensate();
        _this.description = 'If you are in combat, gain ' + _this.value.getDescription() + ' Blessing Points (see rules) or double this value if you are fighting Undead, Devils or Demons. Additionally your next ability chance roll has 1 Boon. This action can be only made as first Standard Action you make this combat. ';
        return _this;
    }
    return piousPrayerUtility;
}(utility_1.Utility));
exports.piousPrayerUtility = piousPrayerUtility;