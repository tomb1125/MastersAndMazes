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
(function (Ability) {
    var Type;
    (function (Type) {
        Type[Type["Weapon"] = 0] = "Weapon";
        Type[Type["Spell"] = 1] = "Spell";
        Type[Type["Technique"] = 2] = "Technique";
        Type[Type["Passive"] = 3] = "Passive";
    })(Type = Ability.Type || (Ability.Type = {}));
})(Ability || (exports.Ability = Ability = {}));
