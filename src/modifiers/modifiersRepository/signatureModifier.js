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
exports.signatureModifier = void 0;
var modifier_1 = require("../modifier");
var signatureModifier = /** @class */ (function (_super) {
    __extends(signatureModifier, _super);
    function signatureModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.2; };
        _this.name = 'Signature';
        _this.namePrefix = 'Signature';
        _this.description = 'This is Signature Ability - First Signature Ability you use each combat gains 1 Boon for its chance or +4 damage, before rolling.';
        _this.longDescription = '';
        _this.type = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return signatureModifier;
}(modifier_1.Modifier));
exports.signatureModifier = signatureModifier;
