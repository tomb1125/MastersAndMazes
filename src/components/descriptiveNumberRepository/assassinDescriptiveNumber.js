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
exports.assassinDescriptiveNumber = void 0;
var utils_1 = require("../../core/utils");
var descriptiveNumber_1 = require("../descriptiveNumber");
var assassinDescriptiveNumber = /** @class */ (function (_super) {
    __extends(assassinDescriptiveNumber, _super);
    function assassinDescriptiveNumber(value) {
        var _this = _super.call(this, utils_1.Utils.AVG_ENEMIES_PER_PLAYER * 1.5) || this;
        _this.description = 'the number of enemies you defeated today';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        _this.name = 'assassin';
        return _this;
    }
    return assassinDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.assassinDescriptiveNumber = assassinDescriptiveNumber;
