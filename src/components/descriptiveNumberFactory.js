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
exports.DescriptiveNumberFactory = void 0;
var weightedList_1 = require("../core/weightedList");
var adjacentEnemiesDescriptiveNumber_1 = require("./descriptiveNumberRepository/small/adjacentEnemiesDescriptiveNumber");
var assassinDescriptiveNumber_1 = require("./descriptiveNumberRepository/assassinDescriptiveNumber");
var currentHealthDescriptiveNumber_1 = require("./descriptiveNumberRepository/currentHealthDescriptiveNumber");
var d4MinuteDescriptiveNumber_1 = require("./descriptiveNumberRepository/duration/d4MinuteDescriptiveNumber");
var aneHourDescriptiveNumber_1 = require("./descriptiveNumberRepository/duration/aneHourDescriptiveNumber");
var numberOfTurnsDescriptiveNumber_1 = require("./descriptiveNumberRepository/numberOfTurnsDescriptiveNumber");
var damageTakenDescriptiveNumber_1 = require("./descriptiveNumberRepository/damageTakenDescriptiveNumber");
var factory_1 = require("../core/factory");
var numberOfScarsDescriptiveNumber_1 = require("./descriptiveNumberRepository/numberOfScarsDescriptiveNumber");
var DescriptiveNumberFactory = /** @class */ (function (_super) {
    __extends(DescriptiveNumberFactory, _super);
    function DescriptiveNumberFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            //small
            _this.items.push(new adjacentEnemiesDescriptiveNumber_1.adjacentEnemiesDescriptiveNumber());
            //common
            _this.items.push(new assassinDescriptiveNumber_1.assassinDescriptiveNumber());
            _this.items.push(new currentHealthDescriptiveNumber_1.currentHealthDescriptiveNumber());
            _this.items.push(new damageTakenDescriptiveNumber_1.damageTakenDescriptiveNumber());
            _this.items.push(new numberOfScarsDescriptiveNumber_1.numberOfScarsDescriptiveNumber());
            _this.items.push(new numberOfTurnsDescriptiveNumber_1.numberOfTurnsDescriptiveNumber());
            //duration
            _this.items.push(new d4MinuteDescriptiveNumber_1.d4MinuteDescriptiveNumber());
            _this.items.push(new aneHourDescriptiveNumber_1.oneHourDescriptiveNumber());
        }
        else {
            _this.items = list;
        }
        return _this;
    }
    DescriptiveNumberFactory.prototype.get = function (count) {
        return _super.prototype.get.call(this, count);
    };
    DescriptiveNumberFactory.prototype.filter = function (z) {
        return _super.prototype.filter.call(this, z);
    };
    return DescriptiveNumberFactory;
}(factory_1.Factory));
exports.DescriptiveNumberFactory = DescriptiveNumberFactory;
