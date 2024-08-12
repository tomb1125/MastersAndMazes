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
exports.magicalAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var magicalAbilityObject = /** @class */ (function (_super) {
    __extends(magicalAbilityObject, _super);
    function magicalAbilityObject() {
        var _this = _super.call(this, 'Magical') || this;
        _this.description = 'any elemental, magical or otherwise enhanced animal';
        _this.rarity = 0.4;
        _this.prefix = 'Magical';
        _this.isAnimal = true;
        return _this;
    }
    return magicalAbilityObject;
}(abilityObject_1.AbilityObject));
exports.magicalAbilityObject = magicalAbilityObject;
