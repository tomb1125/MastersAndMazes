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
var factory_1 = require("../core/factory");
//factory imports
var adjacentEnemiesDescriptiveNumber_1 = require("./descriptiveNumberRepository/small/adjacentEnemiesDescriptiveNumber");
var numberOfTurnsDescriptiveNumber_1 = require("./descriptiveNumberRepository/numberOfTurnsDescriptiveNumber");
var numberOfScarsDescriptiveNumber_1 = require("./descriptiveNumberRepository/numberOfScarsDescriptiveNumber");
var oneHourDescriptiveNumber_1 = require("./descriptiveNumberRepository/duration/oneHourDescriptiveNumber");
var d4MinuteDescriptiveNumber_1 = require("./descriptiveNumberRepository/duration/d4MinuteDescriptiveNumber");
var damageTakenDescriptiveNumber_1 = require("./descriptiveNumberRepository/damageTakenDescriptiveNumber");
var currentHealthDescriptiveNumber_1 = require("./descriptiveNumberRepository/currentHealthDescriptiveNumber");
var assassinDescriptiveNumber_1 = require("./descriptiveNumberRepository/assassinDescriptiveNumber");
var DescriptiveNumberFactory = /** @class */ (function (_super) {
    __extends(DescriptiveNumberFactory, _super);
    function DescriptiveNumberFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new adjacentEnemiesDescriptiveNumber_1.adjacentEnemiesDescriptiveNumber());
            _this.items.push(new numberOfTurnsDescriptiveNumber_1.numberOfTurnsDescriptiveNumber());
            _this.items.push(new numberOfScarsDescriptiveNumber_1.numberOfScarsDescriptiveNumber());
            _this.items.push(new oneHourDescriptiveNumber_1.oneHourDescriptiveNumber());
            _this.items.push(new d4MinuteDescriptiveNumber_1.d4MinuteDescriptiveNumber());
            _this.items.push(new damageTakenDescriptiveNumber_1.damageTakenDescriptiveNumber());
            _this.items.push(new currentHealthDescriptiveNumber_1.currentHealthDescriptiveNumber());
            _this.items.push(new assassinDescriptiveNumber_1.assassinDescriptiveNumber());
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
