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
exports.AbilityObjectFactory = void 0;
var factory_1 = require("../core/factory");
var weightedList_1 = require("../core/weightedList");
var allAnimalsAbilityObject_1 = require("./abilityObjectRepository/animals/allAnimalsAbilityObject");
var catAbilityObject_1 = require("./abilityObjectRepository/animals/catAbilityObject");
var gainUnderstandingAbilityObject_1 = require("./abilityObjectRepository/symetricCommunications/gainUnderstandingAbilityObject");
var symetricTelepathyAbilityObject_1 = require("./abilityObjectRepository/symetricCommunications/symetricTelepathyAbilityObject");
var AbilityObjectFactory = /** @class */ (function (_super) {
    __extends(AbilityObjectFactory, _super);
    function AbilityObjectFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            //animals
            _this.items.push(new allAnimalsAbilityObject_1.allAnimalsAbilityObject());
            _this.items.push(new catAbilityObject_1.catAbilityObject());
            //communications
            _this.items.push(new gainUnderstandingAbilityObject_1.gainUnderstandingAbilityObject());
            _this.items.push(new symetricTelepathyAbilityObject_1.symetricTelepathyAbilityObject());
        }
        else {
            _this.items = list;
        }
        return _this;
    }
    AbilityObjectFactory.prototype.get = function (count) {
        return _super.prototype.get.call(this, count);
    };
    AbilityObjectFactory.prototype.filter = function (z) {
        return _super.prototype.filter.call(this, z);
    };
    return AbilityObjectFactory;
}(factory_1.Factory));
exports.AbilityObjectFactory = AbilityObjectFactory;
