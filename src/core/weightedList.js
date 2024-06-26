"use strict";
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
    WeightedList.prototype.push = function (item) {
        this.items.push(item);
    };
    WeightedList.prototype.get = function () {
        var allWeight = this.items.reduce(function (sum, item) { return sum + item.weight; }, 0);
        var roll = utils_1.Utils.random() * allWeight;
        console.log(roll);
        for (var i = 0; i < this.items.length; i++) {
            roll -= this.items[i].weight;
            if (roll < 0) {
                return this.items[i];
            }
        }
        throw 'randomness out of bound';
    };
    return WeightedList;
}());
exports.WeightedList = WeightedList;
