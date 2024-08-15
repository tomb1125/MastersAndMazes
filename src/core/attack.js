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
var descriptiveNumberFactory_1 = require("../components/descriptiveNumberFactory");
var Attack = /** @class */ (function (_super) {
    __extends(Attack, _super);
    function Attack(otherName) {
        var _this = _super.call(this, otherName) || this;
        _this.cooldown = ability_1.Ability.Cooldown.Encounter;
        _this.type = ability_1.Ability.Type.Attack;
        return _this;
    }
    Attack.prototype.generate = function () {
        this.initCommon();
        this.initType();
        this.initModifiers();
        this.initChance();
        this.initRange();
        this.initDamage();
        this.finalAdjustments();
        this.compensate();
    };
    Attack.prototype.initCommon = function () {
        this.manaCost = 0;
        this.attackTemplate = 'Standard';
        this.target = new descriptiveNumber_1.DescriptiveNumber(1);
    };
    Attack.prototype.initType = function () {
        if (this.subtype === undefined) {
            var roll = utils_1.Utils.random();
            if (roll > 0.5) {
                this.subtype = Attack.Subtype.Weapon;
            }
            else {
                this.subtype = Attack.Subtype.Spell;
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
            if (this.subtype === Attack.Subtype.Weapon) {
                this.range = 1;
            }
            else {
                this.range = (Math.ceil(utils_1.Utils.random() * 3) * 5);
            }
        }
    };
    Attack.prototype.initDamage = function () {
        var tempDamage = this.getTempDamage();
        if (!this.damage && utils_1.Utils.random() < utils_1.Utils.ATTACK_DESCRIPTIVE_NUMBER_CHANCE) {
            this.damage = new descriptiveNumberFactory_1.DescriptiveNumberFactory(this).filter(function (x) { return x.type === descriptiveNumber_1.DescriptiveNumber.Type.Common; }).get(1)[0];
        }
        //if((this.damage && this.damage?.getValue() < 5) || (!this.damage && tempDamage < 5)) {
        //  this.modifiers.push(new ModifierFactory().filter(mod => mod.modifierType === Modifier.Type.Constraint && !this.modifiers.map(mod => mod.name).includes(mod.name)).get(1, this)[0]);
        //}
        if (!this.damage) {
            this.damage = new descriptiveNumber_1.DescriptiveNumber(tempDamage);
        }
        else {
            if (tempDamage > 0) {
                this.chance = this.chance * tempDamage / this.damage.getValue();
            }
            else {
            }
        }
    };
    Attack.prototype.getTempDamage = function () {
        return ((this.manaCost +
            characterContext_1.CharacterContext.getDPS()) * modifierFactory_1.ModifierFactory.getDPSMultiplier(this.modifiers, this)
            + modifierFactory_1.ModifierFactory.getDPSBonus(this.modifiers, this))
            * utils_1.Utils.getRangeCoeficient(this.range)
            * utils_1.Utils.getDPSCoefficient(this.chance)
            / this.chance;
    };
    Attack.prototype.getPower = function () {
        var power = (this.damage.getValue() *
            this.chance
            / utils_1.Utils.getRangeCoeficient(this.range)
            / utils_1.Utils.getDPSCoefficient(this.chance)
            - modifierFactory_1.ModifierFactory.getDPSBonus(this.modifiers, this)) / modifierFactory_1.ModifierFactory.getDPSMultiplier(this.modifiers, this)
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
                    _this.modifiers = new modifierFactory_1.ModifierFactory(_this).get(numberOfModifiers);
                }
                else {
                    _this.modifiers = [];
                }
            });
        }
    };
    Attack.prototype.finalAdjustments = function () {
        if (this.subtype === Attack.Subtype.Spell) { //TODO allow for disabling compensation
            //if(this.damage.description != null) {
            this.damage.addBonus(1);
            //}
            this.chance = Math.min(1, this.chance + 0.1);
            this.range = (this.range === 1 ? 0 : this.range) + 5;
        }
    };
    Attack.prototype.compensate = function () {
        if (this.damage.getValue() < 3.5 && this.damage.description == undefined) {
            this.damage = new descriptiveNumber_1.DescriptiveNumber(3.5);
        }
        if (this.chance > 1) {
            this.chance = 1;
        }
        var tempMana = Math.ceil(this.getPower() - 0.00001);
        if (this.manaCost + tempMana < 0) {
            this.chance += 0.1;
            if (this.chance > 1) {
                this.damage.addBonus(1); ///= new DescriptiveNumber(this.damage.getValue()+1); //TODO allow DescriptiveNumbers to get static bonuses
            }
            this.compensate();
        }
        else {
            this.manaCost += tempMana;
        }
    };
    Attack.prototype.getDescription = function () {
        return '' +
            '<b>Name: ' + this.generateName() +
            '</b><br><b>Chance</b>: ' + Math.ceil(this.chance * 100) + '%' +
            '<br><b>Damage</b>: ' + (this.damage.description ? this.damage.getDescription() : utils_1.Utils.valueToDiceRoll(this.damage.getValue())) +
            '<br><b>Mana Cost</b>: ' + this.manaCost +
            '<br><b>Range</b>: ' + this.range +
            '<br><b>Modifiers</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ', ' + (mod.name === undefined ? mod.namePrefix : mod.name); }, '').slice(2) +
            '<br><b>Description</b>: ' + this.modifiers.reduce(function (sum, mod) { return sum + ' ' + mod.description; }, '').slice(1) +
            '<br><b>Type</b>: ' + Attack.Subtype[this.subtype] +
            '<br><b>Cooldown</b>: ' + ability_1.Ability.Cooldown[this.cooldown];
    };
    Attack.prototype.generateName = function () {
        var attackPortion = this.subtype === Attack.Subtype.Weapon ? [
            'Basic Attack'
        ].sort(function () { return 0.5 - utils_1.Utils.random(); })[0] : '';
        var spellPortion = this.subtype === Attack.Subtype.Spell ? [
            'Basic Bolt'
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
        [1.2, 3],
        [1.4, 4]
    ]);
    return Attack;
}(activity_1.Activity));
exports.Attack = Attack;
(function (Attack) {
    var Subtype;
    (function (Subtype) {
        Subtype[Subtype["Weapon"] = 0] = "Weapon";
        Subtype[Subtype["Spell"] = 1] = "Spell";
    })(Subtype = Attack.Subtype || (Attack.Subtype = {}));
})(Attack || (exports.Attack = Attack = {}));
