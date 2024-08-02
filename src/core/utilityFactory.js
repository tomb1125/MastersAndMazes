"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilityFactory = void 0;
var animalSpeak_1 = require("./utilityRepository/animalSpeak");
var weightedList_1 = require("./weightedList");
var UtilityFactory = /** @class */ (function () {
    function UtilityFactory() {
    }
    UtilityFactory.get = function (count) {
        return this.getAll().get(count);
    };
    UtilityFactory.getAll = function () {
        var utls = new weightedList_1.WeightedList();
        utls.push(new animalSpeak_1.AnimalSpeak());
        return utls;
    };
    return UtilityFactory;
}());
exports.UtilityFactory = UtilityFactory;
