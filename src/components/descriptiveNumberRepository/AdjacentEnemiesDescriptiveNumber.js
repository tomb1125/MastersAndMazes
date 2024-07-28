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
exports.adjacentEnemiesDescriptiveNumber = void 0;
var descriptiveNumber_1 = require("../descriptiveNumber");
var adjacentEnemiesDescriptiveNumber = /** @class */ (function (_super) {
    __extends(adjacentEnemiesDescriptiveNumber, _super);
    function adjacentEnemiesDescriptiveNumber(value) {
        var _this = _super.call(this, value) || this;
        _this.value = 3;
        _this.type = descriptiveNumber_1.DescriptiveNumber.Type.Small;
        _this.name = 'the number of enemies adjacent to you.';
        return _this;
    }
    return adjacentEnemiesDescriptiveNumber;
}(descriptiveNumber_1.DescriptiveNumber));
exports.adjacentEnemiesDescriptiveNumber = adjacentEnemiesDescriptiveNumber;
