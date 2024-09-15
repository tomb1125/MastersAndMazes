"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
var Factory = /** @class */ (function () {
    function Factory(affector) {
        this.affector = affector;
        Factory.evenItems = [];
    }
    Factory.prototype.getAll = function () {
        return this.items;
    };
    Factory.prototype.get = function (count) {
        return this.items.get(count, this.affector);
    };
    Factory.prototype.getEvenly = function (count) {
        if (Factory.evenItems.length == 0) {
            Factory.evenItems = this.get(Factory.EVEN_LIST_SIZE);
        }
        var index = 0;
        var newItem = Factory.evenItems[index];
        Factory.evenItems.splice(index, 1);
        if (count == 0) {
            return [];
        }
        if (count == 1) {
            return [newItem];
        }
        return __spreadArray([newItem], __read(this.getEvenly(count - 1)), false);
    };
    Factory.prototype.filter = function (z) {
        this.items = this.items.filter(z);
        return this;
    };
    Factory.EVEN_LIST_SIZE = 5;
    return Factory;
}());
exports.Factory = Factory;
