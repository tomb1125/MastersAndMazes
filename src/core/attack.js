"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attack = void 0;
var activity_1 = require("./activity");
var utils_1 = require("./utils");
var abilityType_1 = require("./abilityType");
var modifiersSingleton_1 = require("./../modifiers/modifiersSingleton");
var Attack = /** @class */ (function (_super) {
    __extends(Attack, _super);
    function Attack(otherName) {
        return _super.call(this, otherName) || this;
    }
    Attack.prototype.generate = function () {
        this.initType();
        this.initModifiers();
        this.initChance();
        this.initRange();
        this.initDamage();
        this.compensate();
    };
    Attack.prototype.initType = function () {
        if (!this.type) {
            if (utils_1.Utils.random() > 0.5) {
                this.type = abilityType_1.abilityType.Attack;
            }
            else {
                this.type = abilityType_1.abilityType.Spell;
            }
        }
    };
    Attack.prototype.initChance = function () {
        if (!this.chance) {
            this.chance = (Math.floor(utils_1.Utils.random() * 13) + 4) / 20;
        }
    };
    Attack.prototype.initRange = function () {
        if (!this.range) {
            if (Math.random() > 0.5) {
                this.range = 1;
            }
            else {
                this.range = (Math.ceil(utils_1.Utils.random() * 4) * 5);
            }
        }
    };
    Attack.prototype.initDamage = function () {
        if (!this.damage) {
            this.damage =
                this.getTrueDPS()
                    * this.getRangeCoeficient()
                    * utils_1.Utils.getDPSCoefficient(this.chance)
                    / this.chance;
        }
    };
    Attack.prototype.initModifiers = function () {
        var _this = this;
        var roll = utils_1.Utils.random();
        var numberOfModifiers = -1;
        Attack.MODIFIER_CHANCE.forEach(function (value, key) {
            if (roll <= key && numberOfModifiers === -1) {
                numberOfModifiers = value;
            }
            if (numberOfModifiers > 0) {
                var shuffled = modifiersSingleton_1.modifiers.sort(function () { return 0.5 - utils_1.Utils.random(); });
                _this.modifiers = shuffled.slice(0, numberOfModifiers);
            }
            else {
                _this.modifiers = [];
            }
        });
    };
    Attack.prototype.compensate = function () {
        if (!this.manaCost) {
            this.manaCost = Math.ceil(this.getPower() - 0.00001);
        }
    };
    Attack.prototype.getRangeCoeficient = function () {
        return (16 + this.range) / (15 + 2 * this.range);
    };
    Attack.prototype.getPower = function () {
        var power = this.damage * this.chance
            / this.getRangeCoeficient()
            / utils_1.Utils.getDPSCoefficient(this.chance)
            - this.getTrueDPS();
        if (power)
            return power;
        return 0;
    };
    Attack.prototype.getTrueDPS = function () {
        var dps = utils_1.Utils.DPS;
        this.modifiers.forEach(function (m) {
            if (m.powerBonus) {
                dps += m.powerBonus;
            }
        });
        this.modifiers.forEach(function (m) {
            if (m.powerMultiplier) {
                dps *= m.powerMultiplier;
            }
        });
        return dps;
    };
    Attack.MODIFIER_CHANCE = new Map([
        [0.2, 0],
        [0.7, 1],
        [1, 2],
        [1.1, 3]
    ]);
    return Attack;
}(activity_1.Activity));
exports.Attack = Attack;
