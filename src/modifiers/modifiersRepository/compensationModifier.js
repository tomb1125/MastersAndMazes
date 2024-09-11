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
exports.compensationModifier = void 0;
var modifier_1 = require("../modifier");
var compensationModifier = /** @class */ (function (_super) {
    __extends(compensationModifier, _super);
    function compensationModifier(name, mult, bonus) {
        var _this = _super.call(this) || this;
        _this.name = 'Radiant Flame';
        _this.namePrefix = '';
        _this.description = '';
        _this.weight = function () { return 0; }; //this is purposfully excluded by design
        _this.name = name ? name : '';
        if (mult && bonus) {
            _this.powerMultiplier = function () { return mult; };
            _this.powerMultiplier = function () { return bonus; };
        }
        return _this;
    }
    return compensationModifier;
}(modifier_1.Modifier));
exports.compensationModifier = compensationModifier;
