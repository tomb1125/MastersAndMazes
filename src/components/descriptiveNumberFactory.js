"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptiveNumberFactory = void 0;
var weightedList_1 = require("../core/weightedList");
var AdjacentEnemiesDescriptiveNumber_1 = require("./descriptiveNumberRepository/AdjacentEnemiesDescriptiveNumber");
var assassinDescriptiveNumber_1 = require("./descriptiveNumberRepository/assassinDescriptiveNumber");
var currentHealthDescriptiveNumber_1 = require("./descriptiveNumberRepository/currentHealthDescriptiveNumber");
var d10DescriptiveNumber_1 = require("./descriptiveNumberRepository/d10DescriptiveNumber");
var d4DescriptiveNumber_1 = require("./descriptiveNumberRepository/d4DescriptiveNumber");
var numberOfEnemiesDescriptiveNumber_1 = require("./descriptiveNumberRepository/numberOfEnemiesDescriptiveNumber");
var numberOfTurnsDescriptiveNumber_1 = require("./descriptiveNumberRepository/numberOfTurnsDescriptiveNumber");
var DescriptiveNumberFactory = /** @class */ (function () {
    function DescriptiveNumberFactory() {
    }
    DescriptiveNumberFactory.get = function (count) {
        return this.getAll().get(count);
    };
    DescriptiveNumberFactory.getAll = function () {
        var nums = new weightedList_1.WeightedList();
        nums.push(new d10DescriptiveNumber_1.d10DescriptiveNumber());
        nums.push(new d4DescriptiveNumber_1.d4DescriptiveNumber());
        nums.push(new numberOfEnemiesDescriptiveNumber_1.numberOfEnemiesDescriptiveNumber());
        nums.push(new numberOfTurnsDescriptiveNumber_1.numberOfTurnsDescriptiveNumber());
        nums.push(new currentHealthDescriptiveNumber_1.currentHealthDescriptiveNumber());
        nums.push(new currentHealthDescriptiveNumber_1.currentHealthDescriptiveNumber());
        nums.push(new assassinDescriptiveNumber_1.assassinDescriptiveNumber());
        nums.push(new AdjacentEnemiesDescriptiveNumber_1.adjacentEnemiesDescriptiveNumber());
        return nums;
    };
    return DescriptiveNumberFactory;
}());
exports.DescriptiveNumberFactory = DescriptiveNumberFactory;
