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
exports.bloodiedModifier = void 0;
var modifier_1 = require("../modifier");
var bloodiedModifier = /** @class */ (function (_super) {
    __extends(bloodiedModifier, _super);
    function bloodiedModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.5; };
        //this.weight = (x?: AffectsWeight) => {return x?.type === Ability.Type.Weapon ? 1000 : 1}
        _this.weight = function () { return 1; };
        _this.name = 'Bloody';
        _this.namePrefix = 'Bloody';
        _this.description = 'Can be used only when you have half or less Health.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return bloodiedModifier;
}(modifier_1.Modifier));
exports.bloodiedModifier = bloodiedModifier;