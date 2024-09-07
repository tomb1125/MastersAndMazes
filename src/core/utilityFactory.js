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
exports.UtilityFactory = void 0;
var factory_1 = require("./factory");
var weightedList_1 = require("./weightedList");
//factory imports
var skillBonusUtility_1 = require("./utilityRepository/skillBonusUtility");
var tumbleUtility_1 = require("./utilityRepository/rogueUtilities/tumbleUtility");
var shiftBlameUtility_1 = require("./utilityRepository/rogueUtilities/shiftBlameUtility");
var shadowStrideUtility_1 = require("./utilityRepository/rogueUtilities/shadowStrideUtility");
var pickpocketUtility_1 = require("./utilityRepository/rogueUtilities/pickpocketUtility");
var lockpickingUtility_1 = require("./utilityRepository/rogueUtilities/lockpickingUtility");
var animalSpeak_1 = require("./utilityRepository/druidUtilities/animalSpeak");
var seanceUtility_1 = require("./utilityRepository/clericUtilities/seanceUtility");
var restorationUtility_1 = require("./utilityRepository/clericUtilities/restorationUtility");
var lightUtility_1 = require("./utilityRepository/clericUtilities/lightUtility");
var holyHealUtility_1 = require("./utilityRepository/clericUtilities/holyHealUtility");
var auguryUtility_1 = require("./utilityRepository/clericUtilities/auguryUtility");
var UtilityFactory = /** @class */ (function (_super) {
    __extends(UtilityFactory, _super);
    function UtilityFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new skillBonusUtility_1.skillBonusUtility());
            _this.items.push(new tumbleUtility_1.tumbleUtility());
            _this.items.push(new shiftBlameUtility_1.shiftBlameUtility());
            _this.items.push(new shadowStrideUtility_1.shadowStrideUtility());
            _this.items.push(new pickpocketUtility_1.pickpocketUtility());
            _this.items.push(new lockpickingUtility_1.lockpickingUtility());
            _this.items.push(new animalSpeak_1.animalSpeak());
            _this.items.push(new seanceUtility_1.seanceUtility());
            _this.items.push(new restorationUtility_1.restorationUtility());
            _this.items.push(new lightUtility_1.lightUtility());
            _this.items.push(new holyHealUtility_1.holyHealUtility());
            _this.items.push(new auguryUtility_1.auguryUtility());
        }
        else {
            _this.items = list;
        }
        return _this;
    }
    UtilityFactory.prototype.get = function (count) {
        return _super.prototype.get.call(this, count);
    };
    UtilityFactory.prototype.getEvenly = function (count) {
        return _super.prototype.getEvenly.call(this, count);
    };
    UtilityFactory.prototype.filter = function (z) {
        return _super.prototype.filter.call(this, z);
    };
    return UtilityFactory;
}(factory_1.Factory));
exports.UtilityFactory = UtilityFactory;
