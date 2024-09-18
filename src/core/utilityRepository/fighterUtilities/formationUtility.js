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
exports.formationUtility = void 0;
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var rule_1 = require("../../rule");
var utility_1 = require("../../utility");
var utils_1 = require("../../utils");
var formationUtility = /** @class */ (function (_super) {
    __extends(formationUtility, _super);
    function formationUtility() {
        var _this = _super.call(this, 'Block') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        _this.chance = 0.65;
        _this.value = new descriptiveNumber_1.DescriptiveNumber(3);
        _this.compensate();
        _this.description = 'As a swift action choose two (you may select them in any order): you and one adjacent ally regain ' + _this.value.getDescription() + ' Armor Points; you and one adjacent move ' + _this.value.getDescription() + ' squares; forcefully push one adjacent enemy ' + _this.value.getDescription() + ' squares';
        _this.longDescription = utils_1.Utils.getRule(rule_1.Rule.Name.ForcefulPush).description;
        return _this;
    }
    return formationUtility;
}(utility_1.Utility));
exports.formationUtility = formationUtility;
