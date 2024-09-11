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
exports.enticeRespectUtility = void 0;
var abilityObjectFactory_1 = require("../../../components/abilityObjectFactory");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var enticeRespectUtility = /** @class */ (function (_super) {
    __extends(enticeRespectUtility, _super);
    function enticeRespectUtility() {
        var _this = _super.call(this, 'Entice Respect') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.objects.push(new abilityObjectFactory_1.AbilityObjectFactory(_this).filter(function (x) { return x.isPerson; }).get(1)[0]);
        _this.chance = 0.8;
        _this.compensate();
        _this.description = 'If you succeed you entice respect among ' + _this.objects[0].description + '. They will forgive minor missteps, give minor benefits or back away from conflict. This lasts until end of the day. ';
        return _this;
    }
    return enticeRespectUtility;
}(utility_1.Utility));
exports.enticeRespectUtility = enticeRespectUtility;
