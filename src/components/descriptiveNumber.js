"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptiveNumber = void 0;
var DescriptiveNumber = /** @class */ (function () {
    function DescriptiveNumber(value) {
        this.type = DescriptiveNumber.Type.Common;
        this.weight = function (x) { return 1; };
        this.value = value == undefined ? 0 : value;
    }
    DescriptiveNumber.prototype.getDescription = function () {
        if (this.description) {
            if (this.bonus) {
                return (this.multiplier ? this.multiplier + 'x ' : '') + this.description + (this.bonus >= 0 ? ' + ' : ' ') + Math.ceil(this.bonus);
            }
            else {
                return (this.multiplier ? this.multiplier + 'x ' : '') + this.description;
            }
        }
        if (this.value) {
            return (this.multiplier ? this.multiplier : 1) * this.value + (this.bonus ? Math.ceil(this.bonus) : 0);
        }
        throw 'Undefined Descriptive Number Error';
    };
    DescriptiveNumber.prototype.getValue = function () {
        var bonus = this.bonus ? this.bonus : 0;
        var multiplier = this.multiplier ? this.multiplier : 1;
        return multiplier * this.value + bonus;
    };
    DescriptiveNumber.prototype.getLowValue = function () {
        var lowValue = this.lowValue ? this.lowValue : this.value;
        var multiplier = this.multiplier ? this.multiplier : 1;
        var bonus = this.bonus ? this.bonus : 0;
        return multiplier * lowValue + bonus;
    };
    DescriptiveNumber.prototype.addBonus = function (val) {
        if (this.bonus === undefined) {
            this.bonus = 0;
        }
        this.bonus += val;
    };
    DescriptiveNumber.prototype.addMultiplier = function (val) {
        if (this.multiplier === undefined) {
            this.multiplier = 1;
        }
        this.multiplier += val;
    };
    DescriptiveNumber.prototype.compensate = function () {
        if (!this.bonus) {
            return;
        }
        if (this.bonus >= this.value && this.value > 0) {
            this.bonus -= this.value;
            this.addMultiplier(1);
            this.compensate();
        }
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
