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
exports.EffectFactory = void 0;
var weightedList_1 = require("../core/weightedList");
var dotEffect_1 = require("./effectRepository/dotEffect");
var stunEffect_1 = require("./effectRepository/stunEffect");
var instakillEffect_1 = require("./effectRepository/instakillEffect");
var guidingEffect_1 = require("./effectRepository/guidingEffect");
var damageBonusEffect_1 = require("./effectRepository/damageBonusEffect");
var factory_1 = require("../core/factory");
var EffectFactory = /** @class */ (function (_super) {
    __extends(EffectFactory, _super);
    function EffectFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new stunEffect_1.stunEffect());
            _this.items.push(new instakillEffect_1.instakillEffect());
            _this.items.push(new dotEffect_1.dotEffect());
            _this.items.push(new guidingEffect_1.guidingEffect());
            _this.items.push(new damageBonusEffect_1.damageBonusEffect());
        }
        else {
            _this.items = list;
        }
        return _this;
    }
    EffectFactory.prototype.get = function (count) {
        return _super.prototype.get.call(this, count);
    };
    EffectFactory.prototype.filter = function (z) {
        return _super.prototype.filter.call(this, z);
    };
    return EffectFactory;
}(factory_1.Factory));
exports.EffectFactory = EffectFactory;
