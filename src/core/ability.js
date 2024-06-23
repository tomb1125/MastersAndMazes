"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ability = void 0;
var Ability = /** @class */ (function () {
    function Ability(otherName) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    Ability.prototype.generate = function () {
    };
    return Ability;
}());
exports.Ability = Ability;
