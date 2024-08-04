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
exports.nightlyModifier = void 0;
var modifier_1 = require("../modifier");
var nightlyModifier = /** @class */ (function (_super) {
    __extends(nightlyModifier, _super);
    function nightlyModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.35; };
        _this.name = 'Nightly';
        _this.namePrefix = 'Nightly';
        _this.description = 'Can be used only in the night.';
        _this.longDescription = 'Can be also used on planes without sun.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return nightlyModifier;
}(modifier_1.Modifier));
exports.nightlyModifier = nightlyModifier;
