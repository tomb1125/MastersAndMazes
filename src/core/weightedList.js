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
exports.WeightedList = void 0;
var utils_1 = require("./utils");
var WeightedList = /** @class */ (function () {
    function WeightedList(items) {
        this.items = [];
        if (items) {
            this.items = items;
        }
    }
    WeightedList.prototype.filter = function (z) {
        return new WeightedList(this.items.filter(z));
    };
    WeightedList.prototype.push = function (item) {
        this.items.push(item);
    };
    WeightedList.prototype.get = function (num, affector, banList) {
        return WeightedList.getRandomFromList(__spreadArray([], __read(this.items), false), num, affector);
    };
    WeightedList.getRandomFromList = function (array, num, affector) {
        if (array.length < num) {
            throw 'cannot find ' + num + ' items in array with ' + array.length + ' elements';
        }
        var allWeight = array.reduce(function (sum, item) { return sum + item.weight(affector); }, 0);
        var roll = utils_1.Utils.random() * allWeight;
        var randomElement;
        var newArray;
        for (var i = 0; i < array.length; i++) {
            roll -= array[i].weight(affector);
            if (roll < 0) {
                randomElement = array[i];
                newArray = array.filter(function (n) { return n != randomElement; });
                break;
            }
        }
        if (randomElement && newArray) {
            if (num === 1) {
                return [randomElement];
            }
            else {
                return __spreadArray([randomElement], __read(WeightedList.getRandomFromList(newArray, num - 1, affector)), false);
            }
        }
        throw 'bad randomness';
    };
    return WeightedList;
}());
exports.WeightedList = WeightedList;
