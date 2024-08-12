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
exports.wildAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var wildAbilityObject = /** @class */ (function (_super) {
    __extends(wildAbilityObject, _super);
    function wildAbilityObject() {
        var _this = _super.call(this, 'Wild') || this;
        _this.description = 'any wild, not domesticated nor city, animal';
        _this.rarity = 0.7;
        _this.weight = function () { return 2; };
        _this.prefix = 'Wild';
        _this.isAnimal = true;
        return _this;
    }
    return wildAbilityObject;
}(abilityObject_1.AbilityObject));
exports.wildAbilityObject = wildAbilityObject;
