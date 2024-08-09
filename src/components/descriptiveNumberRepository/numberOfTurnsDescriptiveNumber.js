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
exports.numberOfTurnsDescriptiveNumber = void 0;
var utils_1 = require("../../core/utils");
var descriptiveNumber_1 = require("../descriptiveNumber");
var numberOfTurnsDescriptiveNumber = /** @class */ (function (_super) {
    __extends(numberOfTurnsDescriptiveNumber, _super);
    function numberOfTurnsDescriptiveNumber(value) {
        var _this = _super.call(this, 2 * utils_1.Utils.AVG_TURN) || this;
        _this.lowValue = 1;
        _this.description = 'two times the number of rounds in combat';
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        return _this;
    }
    return numberOfTurnsDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.numberOfTurnsDescriptiveNumber = numberOfTurnsDescriptiveNumber;
