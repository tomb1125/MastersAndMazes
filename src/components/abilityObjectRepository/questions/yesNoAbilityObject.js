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
exports.yesNoAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var yesNoAbilityObject = /** @class */ (function (_super) {
    __extends(yesNoAbilityObject, _super);
    function yesNoAbilityObject() {
        var _this = _super.call(this, 'Yes/No') || this;
        _this.description = 'Questions must be a Yes or No question, but will be answered truthfully. ';
        _this.rarity = 1.2;
        _this.prefix = 'Yes/No';
        _this.isQuestion = true;
        return _this;
    }
    return yesNoAbilityObject;
}(abilityObject_1.AbilityObject));
exports.yesNoAbilityObject = yesNoAbilityObject;
