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
exports.oneHourDescriptiveNumber = void 0;
var descriptiveNumber_1 = require("../../descriptiveNumber");
var oneHourDescriptiveNumber = /** @class */ (function (_super) {
    __extends(oneHourDescriptiveNumber, _super);
    function oneHourDescriptiveNumber(value) {
        var _this = _super.call(this, value) || this;
        _this.prefix = 'Hourly';
        _this.value = 2;
        _this.description = 'one hour';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.UtilityDuration;
        _this.name = 'One Hour';
        return _this;
    }
    return oneHourDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.oneHourDescriptiveNumber = oneHourDescriptiveNumber;
