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
exports.rigidTrainingAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var rigidTrainingAbilityObject = /** @class */ (function (_super) {
    __extends(rigidTrainingAbilityObject, _super);
    function rigidTrainingAbilityObject() {
        var _this = _super.call(this, 'Rigid Training') || this;
        _this.description = 'As long as you benefit from training reduce your maximum Health by 8. ';
        _this.rarity = 0.7;
        _this.prefix = 'Rigid';
        _this.isTraining = true;
        return _this;
    }
    return rigidTrainingAbilityObject;
}(abilityObject_1.AbilityObject));
exports.rigidTrainingAbilityObject = rigidTrainingAbilityObject;
