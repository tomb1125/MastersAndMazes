"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
var Factory = /** @class */ (function () {
    function Factory(affector) {
        this.affector = affector;
    }
    Factory.prototype.getAll = function () {
        return this.items;
    };
    Factory.prototype.get = function (count) {
        return this.items.get(count, this.affector);
    };
    Factory.prototype.filter = function (z) {
        this.items = this.items.filter(z);
        return this;
    };
    return Factory;
}());
exports.Factory = Factory;
