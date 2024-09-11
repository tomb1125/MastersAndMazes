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
exports.blockUtility = void 0;
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var blockUtility = /** @class */ (function (_super) {
    __extends(blockUtility, _super);
    function blockUtility() {
        var _this = _super.call(this, 'Block') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        _this.chance = 0.45;
        _this.value = new descriptiveNumber_1.DescriptiveNumber(15);
        _this.compensate();
        _this.description = 'Use as reaction when being attacked. If you succeed you reduce damage by ' + _this.value.getDescription() + '. You gain 2 Boons for chance roll if you use a shield. ';
        return _this;
    }
    return blockUtility;
}(utility_1.Utility));
exports.blockUtility = blockUtility;
