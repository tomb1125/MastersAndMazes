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
exports.FighterClass = void 0;
var characterContext_1 = require("../../core/characterContext");
var classDetails_1 = require("../classDetails");
var FighterClass = /** @class */ (function (_super) {
    __extends(FighterClass, _super);
    function FighterClass() {
        var _this = _super.call(this) || this;
        _this.type = characterContext_1.CharacterContext.Class.Rogue;
        _this.primaryAttribute = characterContext_1.CharacterContext.Attribute.Strength;
        _this.secondaryAttribute = characterContext_1.CharacterContext.Attribute.Constitution;
        _this.armorProficiency = characterContext_1.CharacterContext.ArmorProficiency.Heavy;
        return _this;
    }
    return FighterClass;
}(classDetails_1.ClassDetails));
exports.FighterClass = FighterClass;
