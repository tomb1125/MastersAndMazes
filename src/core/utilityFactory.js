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
var animalSpeak_1 = require("./utilityRepository/animalSpeak");
var weightedList_1 = require("./weightedList");
var UtilityFactory = /** @class */ (function (_super) {
    __extends(UtilityFactory, _super);
    function UtilityFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            //animals
            _this.items.push(new animalSpeak_1.AnimalSpeak());
        }
        else {
            _this.items = list;
        }
        return _this;
    }
    UtilityFactory.prototype.get = function (count) {
        return _super.prototype.get.call(this, count);
    };
    UtilityFactory.prototype.filter = function (z) {
        return _super.prototype.filter.call(this, z);
    };
    return UtilityFactory;
}(factory_1.Factory));
exports.UtilityFactory = UtilityFactory;
