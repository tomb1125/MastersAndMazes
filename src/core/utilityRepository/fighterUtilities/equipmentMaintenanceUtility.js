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
exports.equipmentMaintenanceUtility = void 0;
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var ability_1 = require("../../ability");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var equipmentMaintenanceUtility = /** @class */ (function (_super) {
    __extends(equipmentMaintenanceUtility, _super);
    function equipmentMaintenanceUtility() {
        var _this = _super.call(this, 'Equipment Maintenance') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.cooldown = ability_1.Ability.Cooldown.Daily;
        _this.chance = 0.9;
        _this.value = new descriptiveNumber_1.DescriptiveNumber(10);
        _this.compensate();
        _this.description = 'If you succeed repair and maintain equipment. You can repair weapons and armor after being damaged by acid and similar effects. Additionally until end of the day maintained armor grants extra ' + _this.value.getDescription() + ' Armor Points.';
        return _this;
    }
    return equipmentMaintenanceUtility;
}(utility_1.Utility));
exports.equipmentMaintenanceUtility = equipmentMaintenanceUtility;
