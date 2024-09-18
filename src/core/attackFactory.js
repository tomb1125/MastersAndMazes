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
exports.AttackFactory = void 0;
var factory_1 = require("./factory");
var weightedList_1 = require("./weightedList");
//factory imports
var poisonedDartAttack_1 = require("./attackRepository/rogueAttacks/poisonedDartAttack");
var backstabAttack_1 = require("./attackRepository/rogueAttacks/backstabAttack");
var stanceAttack_1 = require("./attackRepository/fighterAttacks/stanceAttack");
var heavyAttack_1 = require("./attackRepository/fighterAttacks/heavyAttack");
var radiantRayAttack_1 = require("./attackRepository/clericAttacks/radiantRayAttack");
var empoweringStrikeAttack_1 = require("./attackRepository/clericAttacks/empoweringStrikeAttack");
var basicSpell_1 = require("./attackRepository/basicSpell");
var basicAttack_1 = require("./attackRepository/basicAttack");
var AttackFactory = /** @class */ (function (_super) {
    __extends(AttackFactory, _super);
    function AttackFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new poisonedDartAttack_1.poisonedDartAttack(affector));
            _this.items.push(new backstabAttack_1.backstabAttack(affector));
            _this.items.push(new stanceAttack_1.stanceAttack(affector));
            _this.items.push(new heavyAttack_1.heavyAttack(affector));
            _this.items.push(new radiantRayAttack_1.radiantRayAttack(affector));
            _this.items.push(new empoweringStrikeAttack_1.empoweringStrikeAttack(affector));
            _this.items.push(new basicSpell_1.basicSpell(affector));
            _this.items.push(new basicAttack_1.basicAttack(affector));
        }
        else {
            _this.items = list;
        }
        return _this;
    }
    AttackFactory.prototype.get = function (count) {
        return _super.prototype.get.call(this, count);
    };
    AttackFactory.prototype.filter = function (z) {
        return _super.prototype.filter.call(this, z);
    };
    return AttackFactory;
}(factory_1.Factory));
exports.AttackFactory = AttackFactory;
