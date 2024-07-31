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
var modifierFactory_1 = require("./../modifiers/modifierFactory");
var ability_1 = require("./ability");
var descriptiveNumber_1 = require("../components/descriptiveNumber");
var characterContext_1 = require("./characterContext");
var Attack = /** @class */ (function (_super) {
    __extends(Attack, _super);
    function Attack(otherName) {
        var _this = _super.call(this, otherName) || this;
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        return _this;
    }
    Attack.prototype.generate = function () {
        this.initMana();
        this.initType();
        this.initModifiers();
        this.initChance();
        this.initRange();
        this.initDamage();
        this.finalAdjustments();
        this.compensate();
    };
    Attack.prototype.initMana = function () {
        this.manaCost = 0;
    };
    Attack.prototype.initType = function () {
        if (this.type === undefined) {
            var roll = utils_1.Utils.random();
            if (roll > 0.5) {
                this.type = activity_1.Activity.Type.Weapon;
            }
            else {
                this.type = activity_1.Activity.Type.Spell;
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
        var tempDamage = ((this.manaCost +
            characterContext_1.CharacterContext.getDPS()) * this.getDPSMultiplier()
            - this.getDPSBonus())
            * utils_1.Utils.getRangeCoeficient(this.range)
            * utils_1.Utils.getDPSCoefficient(this.chance)
            / this.chance;
        if (!this.damage) { //TODO here get common descriptive number
            this.damage = new descriptiveNumber_1.DescriptiveNumber(tempDamage);
        }
        else {
            this.chance = this.chance * tempDamage / this.damage.getValue();
        }
    };
    Attack.prototype.getPower = function () {
        var power = (this.damage.value *
            this.chance
            / utils_1.Utils.getRangeCoeficient(this.range)
            / utils_1.Utils.getDPSCoefficient(this.chance)
            + this.getDPSBonus()) / this.getDPSMultiplier()
            - characterContext_1.CharacterContext.getDPS()
            - this.manaCost;
        return power;
    };
    //TODO split modifiers and improvements
    Attack.prototype.initModifiers = function () {
        var _this = this;
        var roll = utils_1.Utils.random();
        var numberOfModifiers = -1;
        if (!this.modifiers) {
            Attack.MODIFIER_CHANCE.forEach(function (value, key) {
                if (roll <= key && numberOfModifiers === -1) {
                    numberOfModifiers = value;
                }
                if (numberOfModifiers > 0) {
                    _this.modifiers = modifierFactory_1.ModifierFactory.get(numberOfModifiers);
                }
                else {
                    _this.modifiers = [];
                }
            });
        }
    };
    Attack.prototype.finalAdjustments = function () {
        if (this.type === ability_1.Ability.Type.Spell) { //TODO allow for disabling compensation
            if (this.damage.description != null) {
                this.damage.value += Math.ceil(utils_1.Utils.random() * 2.1);
            }
            this.chance = Math.min(1, this.chance + 0.1);
            this.range = (this.range === 1 ? 0 : this.range) + 5;
        }
    };
    Attack.prototype.compensate = function () {
        if (this.damage.value < 2.5 && this.damage.description == undefined) {
            this.damage.value = 2.5;
        }
        this.manaCost += Math.ceil(this.getPower() - 0.00001);
    };
    Attack.prototype.getDPSBonus = function () {
        var _this = this;
        var dps = 0;
        this.modifiers.forEach(function (m) {
            if (m.powerBonus) {
                dps += m.powerBonus(_this);
            }
        });
        return dps;
    };
    Attack.prototype.getDPSMultiplier = function () {
        var _this = this;
        var dps = 1;
        this.modifiers.forEach(function (m) {
            if (m.powerMultiplier) {
                dps *= m.powerMultiplier(_this);
            }
        });
        return dps;
    };
    Attack.prototype.getDescription = function () {
        return '' +
            'Name: ' + this.generateName() +
            '\nChance: ' + Math.ceil(this.chance * 100) + '%' +
            '\nDamage: ' + (this.damage.description ? this.damage.getDescription() : utils_1.Utils.valueToDiceRoll(this.damage.value)) +
            '\nMana Cost: ' + this.manaCost +
            '\nRange: ' + this.range +
            '\nModifiers: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
            '\nType: ' + ability_1.Ability.Type[this.type] +
            '\nDescription: ' + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1);
    };
    Attack.prototype.generateName = function () {
        var attackPortion = this.type === activity_1.Activity.Type.Weapon ? [
            'Slam',
            'Stab',
            'Strike',
            'Slash',
            'Pummel'
        ].sort(function () { return 0.5 - utils_1.Utils.random(); })[0] : '';
        var spellPortion = this.type === activity_1.Activity.Type.Spell ? [
            'Blast',
            'Ray',
            'Missile',
            'Dart',
            'Beam'
        ].sort(function () { return 0.5 - utils_1.Utils.random(); })[0] : '';
        var randomPortion = [
            this.chance > 0.75 ? 'Precise ' : '',
            this.chance > 0.75 ? 'Accurate ' : '',
            this.chance < 0.3 ? 'Heavy ' : '',
            this.chance < 0.3 ? 'Slow ' : '',
            this.modifiers.length === 0 ? 'Boring ' : '',
            this.modifiers.length === 0 ? 'Basic ' : '',
            this.modifiers.length === 0 ? 'Nothing-To-Write-Home-About ' : '',
            this.manaCost > 8 ? 'Costly ' : '',
            this.manaCost > 8 ? 'Exhausting ' : '',
            '',
            '',
            'Gruesome ',
            'Deadly ',
            'Awesome ',
            'Flashy ',
            'Outstanding ',
            'Ruthless '
        ].sort(function () { return 0.5 - utils_1.Utils.random(); })[0];
        return this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.namePrefix; }, '').slice(1) +
            (this.modifiers.length > 0 ? ' ' : '') +
            randomPortion +
            attackPortion +
            spellPortion;
    };
    Attack.MODIFIER_CHANCE = new Map([
        [0.1, 0],
        [0.7, 1],
        [1, 2],
        [1.1, 3],
        [1.4, 4]
    ]);
    return Attack;
}(activity_1.Activity));
exports.Attack = Attack;
