"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptiveNumber = void 0;
var DescriptiveNumber = /** @class */ (function () {
    function DescriptiveNumber() {
        this.weight = 1;
    }
    DescriptiveNumber.prototype.getDescription = function () {
        if (this.description != undefined)
            return this.description;
        if (this.value != undefined)
            return this.value;
        console.dir(this);
        throw 'Undefined Descriptive Number Error';
    };
    DescriptiveNumber.prototype.getNumber = function () {
        return this.value;
    };
    return DescriptiveNumber;
}());
exports.DescriptiveNumber = DescriptiveNumber;
(function (DescriptiveNumber) {
    var Type;
    (function (Type) {
        Type[Type["Common"] = 0] = "Common";
        Type[Type["Range"] = 1] = "Range";
    })(Type = DescriptiveNumber.Type || (DescriptiveNumber.Type = {}));
})(DescriptiveNumber || (exports.DescriptiveNumber = DescriptiveNumber = {}));
