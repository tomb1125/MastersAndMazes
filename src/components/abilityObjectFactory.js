"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityObjectFactory = void 0;
var weightedList_1 = require("../core/weightedList");
var allAnimalsAbilityObject_1 = require("./abilityObjectRepository/animals/allAnimalsAbilityObject");
var catAbilityObject_1 = require("./abilityObjectRepository/animals/catAbilityObject");
var gainUnderstandingAbilityObject_1 = require("./abilityObjectRepository/symetricCommunications/gainUnderstandingAbilityObject");
var symetricTelepathyAbilityObject_1 = require("./abilityObjectRepository/symetricCommunications/symetricTelepathyAbilityObject");
var AbilityObjectFactory = /** @class */ (function () {
    function AbilityObjectFactory() {
    }
    AbilityObjectFactory.get = function (count) {
        return this.getAll().get(count);
    };
    AbilityObjectFactory.getAll = function () {
        var objs = new weightedList_1.WeightedList();
        //animals
        objs.push(new allAnimalsAbilityObject_1.allAnimalsAbilityObject());
        objs.push(new catAbilityObject_1.catAbilityObject());
        //communications
        objs.push(new gainUnderstandingAbilityObject_1.gainUnderstandingAbilityObject());
        objs.push(new symetricTelepathyAbilityObject_1.symetricTelepathyAbilityObject());
        return objs;
    };
    return AbilityObjectFactory;
}());
exports.AbilityObjectFactory = AbilityObjectFactory;
