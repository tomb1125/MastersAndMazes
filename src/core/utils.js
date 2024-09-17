"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var rule_1 = require("./rule");
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
        return Utils.DPS; //+ Utils.POWER_PER_LEVEL * (level - 1)
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
        if (dur >= 5)
            coef += 0.3;
        if (dur >= 6)
            coef += 0.2;
        if (dur >= 7) {
            coef += (dur - 6) * 0.1;
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
    Utils.getRule = function (name) {
        return Utils.rules.filter(function (r) { return r.name === name; })[0];
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
    Utils.AVG_RALLIES = 0.8;
    Utils.AVG_POTIONS = 2.5;
    Utils.AVG_CLOSTEST_DISTANCE = 10;
    Utils.AVG_LONGEST_DISTANCE = 20;
    Utils.EFFECT_WEIGHT_MOD = 1.1;
    Utils.RARE_MODIFIER = 0.1;
    Utils.COMMON_MODIFIER = 0.75;
    Utils.BoonValue = Utils.DPS * 5;
    Utils.avgHealth = 25;
    Utils.rules = [
        new rule_1.Rule(rule_1.Rule.Name.ForcefulPush, 'Forceful Push X - move target X squares. Each square of movement must be further than the previous one. You can push into hazardoous terrain. Each square of movent that is wasted by an obstacle deals 1 damage to them<br>'),
        new rule_1.Rule(rule_1.Rule.Name.Blessing, 'Blessing - Blessing Points are permanent. Whenever you reach 100 or more Blessing, reduce your Blessing by 100 and roll in below table:<br>' +
            '&ensp;1 - Remove all Scars you have.<br>' +
            '&ensp;2 - All rolls have 1 Boon until the end of the next adventure.<br>' +
            '&ensp;3 - Gain 10 Experience points.<br>' +
            '&ensp;4 - Permanently gain 5 maximum Health.<br>' +
            '&ensp;5 - Raise any of your attributes by 10, but not above 50.<br>' +
            '&ensp;6 - Next time you see "you die" effect (eg. dying roll or corruption roll) you can ignore it.<br>'),
        new rule_1.Rule(rule_1.Rule.Name.FighterStance, 'Fighter Stance - choose one effect below, you benefit from it until end of encounter. Only one fighter stance can be active at a time.<br>' +
            '&ensp;Precision - Gain 1 Boon with Weapon Attacks<br>' +
            '&ensp;Power - Deal +2 damage with Weapon Attacks<br>' +
            '&ensp;Endurance - At the end of each turn regain 1 Mana or 3 Mana if you have less than 5 Mana.<br>')
    ];
    return Utils;
}());
exports.Utils = Utils;
