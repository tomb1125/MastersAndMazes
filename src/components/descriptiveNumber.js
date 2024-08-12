"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptiveNumber = void 0;
var DescriptiveNumber = /** @class */ (function () {
    function DescriptiveNumber(value) {
        this.type = DescriptiveNumber.Type.Common;
        this.weight = function (x) { return 1; };
        this.value = value == undefined ? 0 : value;
    }
    ;
    DescriptiveNumber.prototype.getDescription = function () {
        if (this.description != undefined) {
            if (this.bonus != undefined) {
                return this.description + (this.bonus >= 0 ? ' + ' : ' - ') + this.bonus;
            }
            else {
                return this.description;
            }
        }
        if (this.value != undefined) {
            return this.value + (this.bonus != undefined ? this.bonus : 0);
        }
        throw 'Undefined Descriptive Number Error';
    };
    DescriptiveNumber.prototype.getValue = function () {
        return this.value + (this.bonus != undefined ? this.bonus : 0);
    };
    DescriptiveNumber.prototype.getLowValue = function () {
        return (this.lowValue === undefined ? this.value : this.lowValue) + (this.bonus != undefined ? this.bonus : 0);
    };
    DescriptiveNumber.prototype.addBonus = function (val) {
        if (this.bonus === undefined) {
            this.bonus = 0;
        }
        this.bonus += val;
    };
    return DescriptiveNumber;
}());
exports.DescriptiveNumber = DescriptiveNumber;
(function (DescriptiveNumber) {
    var Type;
    (function (Type) {
        Type[Type["Common"] = 0] = "Common";
        Type[Type["Range"] = 1] = "Range";
        Type[Type["Small"] = 2] = "Small";
        Type[Type["UtilityDuration"] = 3] = "UtilityDuration";
    })(Type = DescriptiveNumber.Type || (DescriptiveNumber.Type = {}));
})(DescriptiveNumber || (exports.DescriptiveNumber = DescriptiveNumber = {}));
