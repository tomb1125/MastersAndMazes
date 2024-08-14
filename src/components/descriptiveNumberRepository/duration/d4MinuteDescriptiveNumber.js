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
exports.d4MinuteDescriptiveNumber = void 0;
var utils_1 = require("../../../core/utils");
var descriptiveNumber_1 = require("../../descriptiveNumber");
var d4MinuteDescriptiveNumber = /** @class */ (function (_super) {
    __extends(d4MinuteDescriptiveNumber, _super);
    function d4MinuteDescriptiveNumber(value) {
        var _this = _super.call(this, value) || this;
        var initValue = [1, 5, 10].sort(function () { return 0.5 - utils_1.Utils.random(); })[0];
        _this.value = (initValue + 5) / 15;
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.UtilityDuration;
        _this.name = 'D4 Minutes';
        _this.description = initValue + (initValue === 1 ? ' minute' : ' minutes');
        return _this;
    }
    return d4MinuteDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.d4MinuteDescriptiveNumber = d4MinuteDescriptiveNumber;
