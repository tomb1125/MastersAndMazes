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
exports.casualTrainingAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var casualTrainingAbilityObject = /** @class */ (function (_super) {
    __extends(casualTrainingAbilityObject, _super);
    function casualTrainingAbilityObject() {
        var _this = _super.call(this, 'Casual Training') || this;
        _this.description = 'When you are reduced to 0 Health you lose non-permament benefits of training. ';
        _this.rarity = 0.5;
        _this.prefix = 'Casual';
        _this.isTraining = true;
        return _this;
    }
    return casualTrainingAbilityObject;
}(abilityObject_1.AbilityObject));
exports.casualTrainingAbilityObject = casualTrainingAbilityObject;
