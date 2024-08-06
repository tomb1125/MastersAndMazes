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
exports.cleaveModifier = void 0;
var modifier_1 = require("../modifier");
var cleaveModifier = /** @class */ (function (_super) {
    __extends(cleaveModifier, _super);
    function cleaveModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 0.5; };
        _this.name = 'Cleave';
        _this.namePrefix = 'Cleaving';
        _this.description = 'This action also targets one creature adjacent to initial target.';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    return cleaveModifier;
}(modifier_1.Modifier));
exports.cleaveModifier = cleaveModifier;