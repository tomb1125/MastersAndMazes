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
exports.fastModifier = void 0;
var modifier_1 = require("../modifier");
var fastModifier = /** @class */ (function (_super) {
    __extends(fastModifier, _super);
    function fastModifier() {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 0.5; };
        _this.name = 'Fast';
        _this.namePrefix = 'Fast';
        _this.description = 'You can use Swift Action to use this ability.';
        _this.longDescription = '';
        _this.type = modifier_1.Modifier.Type.Improvement;
        return _this;
    }
    return fastModifier;
}(modifier_1.Modifier));
exports.fastModifier = fastModifier;
