"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.random = function () {
        return Math.random();
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
        return (21 + range) / (20 + 2 * range);
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
    Utils.DPS = 5;
    Utils.POWER_PER_LEVEL = 0.2;
    Utils.BASIC_ATTACK_DPS = 2.5;
    Utils.BoonValue = Utils.DPS * 6;
    Utils.avgHealth = 25;
    Utils.avgEnemies = 7;
    Utils.avgTurn = 5;
    return Utils;
}());
exports.Utils = Utils;
