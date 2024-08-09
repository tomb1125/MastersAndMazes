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
exports.vengefulModifier = void 0;
var modifier_1 = require("../modifier");
var vengefulModifier = /** @class */ (function (_super) {
    __extends(vengefulModifier, _super);
    function vengefulModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function (x) { return 1.3; };
        _this.name = 'Vengeance';
        _this.namePrefix = 'Vengeful';
        _this.description = 'Can be only used against enemy which attacked, damaged or affected you last turn. ';
        _this.longDescription = '';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return vengefulModifier;
}(modifier_1.Modifier));
exports.vengefulModifier = vengefulModifier;
