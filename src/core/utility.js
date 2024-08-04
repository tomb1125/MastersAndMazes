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
exports.Utility = void 0;
var repeatableModifier_1 = require("../modifiers/modifiersRepository/repeatableModifier");
var ability_1 = require("./ability");
var activity_1 = require("./activity");
var Utility = /** @class */ (function (_super) {
    __extends(Utility, _super);
    function Utility(otherName) {
        var _this = _super.call(this, otherName) || this;
        _this.weight = function (x) { return 1; };
        _this.cooldown = ability_1.Ability.Cooldown.Daily;
        _this.objects = [];
        _this.modifiers = [];
        _this.type = ability_1.Ability.Type.Utility;
        return _this;
    }
    Utility.prototype.getDescription = function () {
        return '' +
            'Name: ' + this.generateName() +
            '\nChance: ' + Math.ceil(this.chance * 100) + '%' +
            '\nModifiers: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
            //  '\nType: ' + Ability.Type[this.type] + 
            '\nDescription: ' + this.description + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1) +
            '\nCooldown: ' + ability_1.Ability.Cooldown[this.cooldown];
    };
    Utility.prototype.generateName = function () {
        return this.objects.reduce(function (sum, mod) { return sum + ' ' + (mod.prefix === undefined ? mod.name : mod.prefix); }, '') + ' ' + this.name;
    };
    Utility.prototype.compensate = function () {
        var repeat = new repeatableModifier_1.repeatableModifier();
        if (this.chance > 5) {
            repeat.setValue(10);
            this.chance /= 10;
            this.chance = Math.min(1, this.chance);
            this.modifiers.push(repeat);
            console.error('reaching top end of chance conpensation');
        }
        else if (this.chance > 4) {
            repeat.setValue(8);
            this.chance /= 8;
            this.modifiers.push(repeat);
        }
        else if (this.chance > 3) {
            repeat.setValue(6);
            this.chance /= 6;
            this.modifiers.push(repeat);
        }
        else if (this.chance > 2) {
            repeat.setValue(4);
            this.chance /= 4;
            this.modifiers.push(repeat);
        }
        else if (this.chance > 1) {
            repeat.setValue(2);
            this.chance /= 2;
            this.modifiers.push(repeat);
        }
    };
    return Utility;
}(activity_1.Activity));
exports.Utility = Utility;
