"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptiveNumber = void 0;
var DescriptiveNumber = /** @class */ (function () {
    function DescriptiveNumber(value) {
        this.type = DescriptiveNumber.Type.Common;
        this.weight = 1;
        this.value = value == undefined ? 0 : value;
    }
    DescriptiveNumber.prototype.getDescription = function () {
        if (this.description != undefined)
            return this.description;
        if (this.value != undefined)
            return this.value;
        throw 'Undefined Descriptive Number Error';
    };
    DescriptiveNumber.prototype.getValue = function () {
        return this.value;
    };
    DescriptiveNumber.prototype.getLowValue = function () {
        return this.lowValue == undefined ? this.value : this.lowValue;
    };
    return DescriptiveNumber;
}());
exports.DescriptiveNumber = DescriptiveNumber;
(function (DescriptiveNumber) {
    var Type;
    (function (Type) {
        Type[Type["Common"] = 0] = "Common";
        Type[Type["Range"] = 1] = "Range";
        Type[Type["Small"] = 2] = "Small"; //duration etc.
    })(Type = DescriptiveNumber.Type || (DescriptiveNumber.Type = {}));
})(DescriptiveNumber || (exports.DescriptiveNumber = DescriptiveNumber = {}));
