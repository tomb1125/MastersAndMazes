"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptiveNumberFactory = void 0;
var utils_1 = require("../core/utils");
var weightedList_1 = require("../core/weightedList");
var descriptiveNumber_1 = require("./descriptiveNumber");
var DescriptiveNumberFactory = /** @class */ (function () {
    function DescriptiveNumberFactory() {
    }
    DescriptiveNumberFactory.get = function (count) {
        var nums = new weightedList_1.WeightedList();
        var numericD6 = new descriptiveNumber_1.DescriptiveNumber();
        numericD6.value = Math.ceil(utils_1.Utils.random() * 6);
        numericD6.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        nums.push(numericD6);
        return nums.get(count);
    };
    return DescriptiveNumberFactory;
}());
exports.DescriptiveNumberFactory = DescriptiveNumberFactory;
