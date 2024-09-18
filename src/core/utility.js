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
var modifierFactory_1 = require("../modifiers/modifierFactory");
var utils_1 = require("./utils");
var characterContext_1 = require("./characterContext");
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
    Utility.prototype.getDescription = function (longDescription) {
        var desc = '' +
            '<b>Name: ' + this.generateName() +
            '<br>Chance</b>: ' + Math.ceil(this.chance * 100) + '%' +
            '<br><b>Modifiers</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
            '<br><b>Components</b>: ' + this.objects.reduce(function (sum, mod) { return sum + ', ' + mod.name; }, '').slice(2) +
            '<br><b>Description</b>: ' + this.description + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1) +
            '<br><b>Cooldown</b>: ' + ability_1.Ability.Cooldown[this.cooldown];
        if (longDescription) {
            desc += '<br><b>Rulings</b>: ' + this.longDescription + this.modifiers.reduce(function (sum, mod) { return sum + (mod.longDescription === undefined ? '' : ', ' + mod.longDescription); }, '').slice(2);
        }
        return desc;
    };
    Utility.prototype.generateName = function () {
        return this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.namePrefix; }, '').slice(1) + (this.modifiers.length > 0 ? ' ' : '') +
            this.objects.reduce(function (sum, mod) { return sum + ' ' + (mod.prefix === undefined ? mod.name : mod.prefix); }, '') + ' ' + this.name;
    };
    Utility.prototype.compensate = function () {
        var _this = this;
        var extraMods = utils_1.Utils.getNumberFromValueMap(Utility.MODIFIER_CHANCE, new modifierFactory_1.ModifierFactory(this));
        extraMods.forEach(function (mod) {
            _this.modifiers.push(mod);
        });
        this.chance = this.chance * modifierFactory_1.ModifierFactory.getDPSMultiplier(this.modifiers, this);
        this.objects.forEach(function (obj) {
            _this.chance /= obj.rarity;
        });
        var bonus = modifierFactory_1.ModifierFactory.getDPSBonus(this.modifiers, this);
        if (bonus != 0) {
            if (this.value) {
                this.value.addBonus(bonus * this.value.getValue() / utils_1.Utils.getDPS(1));
            }
            else {
                this.chance += bonus / utils_1.Utils.getDPS(characterContext_1.CharacterContext.level);
            }
        }
        var repeat = new repeatableModifier_1.repeatableModifier();
        if (this.chance > 1) {
            if (this.cooldown === ability_1.Ability.Cooldown.Encounter) {
                if (!this.value) {
                    throw 'cooldown ability with no value to compensate ' + JSON.stringify(this);
                }
                var newChanceNumeric = 0.9;
                this.value.addBonus(Math.ceil(this.value.getValue() * (this.chance - newChanceNumeric) / newChanceNumeric));
                this.value.compensate();
                this.chance = newChanceNumeric;
            }
            else {
                var tempRepeat = Math.ceil(this.chance);
                this.chance /= tempRepeat;
                repeat.setValue(tempRepeat);
                this.modifiers.push(repeat);
            }
        }
    };
    Utility.MODIFIER_CHANCE = new Map([
        [0.3, 0],
        [0.8, 1],
        [1, 2], //TODO restore this
    ]);
    return Utility;
}(activity_1.Activity));
exports.Utility = Utility;
