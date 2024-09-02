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
exports.PickpocketingUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var PickpocketingUtility = /** @class */ (function (_super) {
    __extends(PickpocketingUtility, _super);
    function PickpocketingUtility() {
        var _this = _super.call(this, 'Pickpocketing') || this;
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isPerson; }).get(1)[0]);
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Rogue) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 0.9;
        _this.description = 'You can quickly steal one object from target ' + _this.objects[0].description + '. If this ability goes on cooldown and you fail, the target might suspect someone trying to steal from them. ';
        _this.compensate();
        return _this;
    }
    return PickpocketingUtility;
}(utility_1.Utility));
exports.PickpocketingUtility = PickpocketingUtility;