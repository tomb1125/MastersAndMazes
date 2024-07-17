"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptiveNumberFactory = void 0;
var utils_1 = require("../core/utils");
var weightedList_1 = require("../core/weightedList");
var descriptiveNumber_1 = require("./descriptiveNumber");
var DescriptiveNumberFactory = /** @class */ (function () {
    function DescriptiveNumberFactory() {
    }
    DescriptiveNumberFactory.get = function (count) {
        var nums = new weightedList_1.WeightedList();
        var numericD10 = new descriptiveNumber_1.DescriptiveNumber(Math.ceil(utils_1.Utils.random() * 10));
        numericD10.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        nums.push(numericD10);
        var numberOfEnemies = new descriptiveNumber_1.DescriptiveNumber(utils_1.Utils.avgEnemies);
        numberOfEnemies.description = 'the number of enemies in this combat';
        numberOfEnemies.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        nums.push(numberOfEnemies);
        var numberOfTurns = new descriptiveNumber_1.DescriptiveNumber(utils_1.Utils.avgTurn);
        numberOfTurns.description = 'the turn number of this combat';
        numberOfTurns.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        nums.push(numberOfTurns);
        var currentHealth = new descriptiveNumber_1.DescriptiveNumber(utils_1.Utils.avgHealth);
        currentHealth.description = 'your current health';
        currentHealth.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        nums.push(currentHealth);
        var assassin = new descriptiveNumber_1.DescriptiveNumber(utils_1.Utils.avgEnemies * 2);
        assassin.description = 'the number of enemies you defeated today';
        assassin.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        nums.push(assassin);
        return nums.get(count);
    };
    return DescriptiveNumberFactory;
}());
exports.DescriptiveNumberFactory = DescriptiveNumberFactory;
