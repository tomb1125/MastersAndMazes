"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityObject = void 0;
var AbilityObject = /** @class */ (function () {
    function AbilityObject(name) {
        this.weight = function (x) { return 1; };
        this.isAnimal = false;
        this.isCommunication = false;
        this.isCorpse = false;
        this.isLight = false;
        this.isMovement = false;
        this.isPerson = false;
        this.isQuestion = false;
        this.isStealth = false;
        this.name = name;
    }
    return AbilityObject;
}());
exports.AbilityObject = AbilityObject;
