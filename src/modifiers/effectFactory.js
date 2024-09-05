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
var factory_1 = require("../core/factory");
//factory imports
var vulnerableEffect_1 = require("./effectRepository/vulnerableEffect");
var stunEffect_1 = require("./effectRepository/stunEffect");
var scalingDotEffect_1 = require("./effectRepository/scalingDotEffect");
var protectedEffect_1 = require("./effectRepository/protectedEffect");
var invisibilityEffect_1 = require("./effectRepository/multiclassEffects/invisibilityEffect");
var instakillEffect_1 = require("./effectRepository/instakillEffect");
var guidingEffect_1 = require("./effectRepository/guidingEffect");
var exposeEffect_1 = require("./effectRepository/exposeEffect");
var damageBonusEffect_1 = require("./effectRepository/damageBonusEffect");
var EffectFactory = /** @class */ (function (_super) {
    __extends(EffectFactory, _super);
    function EffectFactory(affector, list) {
        var _this = _super.call(this, affector) || this;
        if (list === undefined) {
            _this.items = new weightedList_1.WeightedList();
            _this.items.push(new vulnerableEffect_1.vulnerableEffect());
            _this.items.push(new stunEffect_1.stunEffect());
            _this.items.push(new scalingDotEffect_1.scalingDotEffect());
            _this.items.push(new protectedEffect_1.protectedEffect());
            _this.items.push(new invisibilityEffect_1.invisibilityEffect());
            _this.items.push(new instakillEffect_1.instakillEffect());
            _this.items.push(new guidingEffect_1.guidingEffect());
            _this.items.push(new exposeEffect_1.exposeEffect());
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
