"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.random = function () {
        return this.gen.random(); // Math.random();
    };
    ;
    //since High Accuracy and Low Accuracy attacks are easily exploitable. Thus we provide bonus to Medium Accuracy attacks.
    Utils.getDPSCoefficient = function (chance) {
        //return 1.1 - 0.2 * Math.abs(0.5 - chance);
        return 1; //TODO restore
    };
    Utils.getDPS = function (level) {
        return Utils.DPS + Utils.POWER_PER_LEVEL * (level - 1);
    };
    Utils.getRangeCoeficient = function (range) {
        if (range <= 1)
            return 1;
        if (range <= 5)
            return 0.95;
        if (range <= 10)
            return 0.90;
        if (range <= 15)
            return 0.85;
        if (range <= 20)
            return 0.80;
        if (range <= 25)
            return 0.75;
        throw 'unsupported range ' + range;
        //return (21 + range )/(20 + 2 * range)
    };
    Utils.getDurationCoeficient = function (dur) {
        var coef = 0;
        if (dur >= 1)
            coef += 0.7;
        if (dur >= 2)
            coef += 0.6;
        if (dur >= 3)
            coef += 0.5;
        if (dur >= 4)
            coef += 0.4;
        if (dur >= 5) {
            coef += (dur - 4) * 0.3;
        }
        return coef;
    };
    Utils.valueToDiceRoll = function (num) {
        if (num < 0)
            throw ('damage too low to represent');
        if (num < 2.25)
            return Math.round(num) + '';
        if (num < 3)
            return 'D4';
        if (num < 4)
            return 'D6';
        if (num < 5)
            return 'D8';
        if (num < 6)
            return 'D10';
        if (num < 14)
            return 'D10 + ' + Math.round(num - 5.5);
        if (num < 20) {
            if (this.isOneDie(num)) {
                return 'D10 + ' + Math.round(num - 5.5);
            }
            return '2D6 + ' + Math.round(num - 7);
        }
        if (num < 100) {
            if (this.isOneDie(num)) {
                return 'D20 + ' + Math.round(num - 10.5);
            }
            return '2D10 + ' + Math.round(num - 11);
        }
        if (num < 200) {
            if (this.isOneDie(num)) {
                return 'D100 + ' + Math.round(num - 50.5);
            }
            return '2D20 + ' + Math.round(num - 21);
        }
        return Math.round(num) + '';
    };
    Utils.isOneDie = function (num) {
        return Math.round(num * 2) % 2 === 1;
    };
    Utils.getNumberFromValueMap = function (orderedValueMap, factory) {
        var roll = Utils.random();
        var items = [];
        orderedValueMap.forEach(function (value, key) {
            if (roll <= key) {
                return;
            }
            items = factory.get(value);
        });
        return items;
    };
    Utils.D = function (value) {
        return Math.ceil(Utils.random() * value);
    };
    Utils.DPS = 5;
    Utils.ENEMY_DPS = 10;
    Utils.POWER_PER_LEVEL = 0.2;
    Utils.BASIC_ATTACK_DPS = 2.5;
    Utils.ATTACK_DESCRIPTIVE_NUMBER_CHANCE = 0.25;
    Utils.AVG_ENEMIES_ADJACENT = 1.9;
    Utils.AVG_PLAYERS = 3;
    Utils.AVG_ENEMIES_PER_PLAYER = 2;
    Utils.AVG_TURN = 4;
    Utils.AVG_SCARS = 2.5;
    Utils.AVG_RALLIES = 1;
    Utils.AVG_POTIONS = 2.5;
    Utils.AVG_CLOSTEST_DISTANCE = 10;
    Utils.AVG_LONGEST_DISTANCE = 20;
    Utils.EFFECT_WEIGHT_MOD = 1.1;
    Utils.RARE_MODIFIER = 0.1;
    Utils.BoonValue = Utils.DPS * 5;
    Utils.avgHealth = 25;
    return Utils;
}());
exports.Utils = Utils;
