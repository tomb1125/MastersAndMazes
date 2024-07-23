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
exports.currentHealthDescriptiveNumber = void 0;
var utils_1 = require("../../core/utils");
var descriptiveNumber_1 = require("../descriptiveNumber");
var currentHealthDescriptiveNumber = /** @class */ (function (_super) {
    __extends(currentHealthDescriptiveNumber, _super);
    function currentHealthDescriptiveNumber(value) {
        var _this = _super.call(this, utils_1.Utils.avgHealth) || this;
        _this.description = 'your current health';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return currentHealthDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.currentHealthDescriptiveNumber = currentHealthDescriptiveNumber;
