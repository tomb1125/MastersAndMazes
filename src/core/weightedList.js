"use strict";
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
    WeightedList.prototype.get = function (num) {
        return WeightedList.getRandomFromList(__spreadArray([], this.items, true), num);
    };
    WeightedList.getRandomFromList = function (array, num) {
        if (array.length < num) {
            throw 'cannot find ' + num + ' items in array with ' + array.length + ' elements';
        }
        var allWeight = array.reduce(function (sum, item) { return sum + item.weight(); }, 0);
        var roll = utils_1.Utils.random() * allWeight;
        var randomElement;
        var newArray;
        for (var i = 0; i < array.length; i++) {
            roll -= array[i].weight();
            if (roll < 0) {
                randomElement = array[i];
                newArray = array.filter(function (n) { return n != randomElement; });
                break;
            }
        }
        if (randomElement && newArray) {
            if (num <= 1) {
                return [randomElement];
            }
            else {
                return __spreadArray([randomElement], WeightedList.getRandomFromList(newArray, num - 1), true);
            }
        }
        throw 'bad randomness';
    };
    return WeightedList;
}());
exports.WeightedList = WeightedList;
