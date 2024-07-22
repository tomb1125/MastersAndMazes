"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptiveNumberFactory = void 0;
var utils_1 = require("../core/utils");
var weightedList_1 = require("../core/weightedList");
var descriptiveNumber_1 = require("./descriptiveNumber");
var d10DescriptiveNumber_1 = require("./descriptiveNumberRepository/d10DescriptiveNumber");
var d4DescriptiveNumber_1 = require("./descriptiveNumberRepository/d4DescriptiveNumber");
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
        var numberOfEnemies = new descriptiveNumber_1.DescriptiveNumber(utils_1.Utils.avgEnemies);
        numberOfEnemies.description = 'the number of enemies in this combat';
        numberOfEnemies.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        nums.push(numberOfEnemies);
        var numberOfTurns = new descriptiveNumber_1.DescriptiveNumber(utils_1.Utils.avgTurn);
        numberOfTurns.description = 'the turn number of this combat';
        numberOfTurns.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        nums.push(numberOfTurns); //add low and high value
        var currentHealth = new descriptiveNumber_1.DescriptiveNumber(utils_1.Utils.avgHealth);
        currentHealth.description = 'your current health';
        currentHealth.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        nums.push(currentHealth);
        var currentDamage = new descriptiveNumber_1.DescriptiveNumber(utils_1.Utils.avgHealth - 1);
        currentDamage.description = 'your current damage taken';
        currentDamage.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        nums.push(currentDamage);
        var assassin = new descriptiveNumber_1.DescriptiveNumber(utils_1.Utils.avgEnemies * 2);
        assassin.description = 'the number of enemies you defeated today';
        assassin.type = descriptiveNumber_1.DescriptiveNumber.Type.Common;
        nums.push(assassin);
        return nums;
    };
    return DescriptiveNumberFactory;
}());
exports.DescriptiveNumberFactory = DescriptiveNumberFactory;
