"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectFactory = void 0;
var weightedList_1 = require("../core/weightedList");
var dotEffect_1 = require("./effectRepository/dotEffect");
var stunEffect_1 = require("./effectRepository/stunEffect");
var instakillEffect_1 = require("./effectRepository/instakillEffect");
var guidingEffect_1 = require("./effectRepository/guidingEffect");
var damageBonusEffect_1 = require("./effectRepository/damageBonusEffect");
var EffectFactory = /** @class */ (function () {
    function EffectFactory() {
    }
    EffectFactory.getAll = function () {
        var eff = new weightedList_1.WeightedList();
        eff.push(new stunEffect_1.stunEffect());
        eff.push(new instakillEffect_1.instakillEffect());
        eff.push(new dotEffect_1.dotEffect());
        eff.push(new guidingEffect_1.guidingEffect());
        eff.push(new damageBonusEffect_1.damageBonusEffect());
        return eff;
    };
    EffectFactory.get = function (count) {
        return EffectFactory.getAll().get(count);
    };
    return EffectFactory;
}());
exports.EffectFactory = EffectFactory;
