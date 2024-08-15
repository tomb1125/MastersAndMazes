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
exports.oneWordAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var oneWordAbilityObject = /** @class */ (function (_super) {
    __extends(oneWordAbilityObject, _super);
    function oneWordAbilityObject() {
        var _this = _super.call(this, 'One Word') || this;
        _this.description = 'Your question cannot be a yes/no question and will be answered truthfully with one word. ';
        _this.rarity = 0.7;
        _this.prefix = 'One Word';
        _this.isQuestion = true;
        return _this;
    }
    return oneWordAbilityObject;
}(abilityObject_1.AbilityObject));
exports.oneWordAbilityObject = oneWordAbilityObject;
