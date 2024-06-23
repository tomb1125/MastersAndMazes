"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abilityType = void 0;
var abilityType;
(function (abilityType) {
    abilityType[abilityType["Attack"] = 0] = "Attack";
    abilityType[abilityType["Spell"] = 1] = "Spell";
    abilityType[abilityType["Technique"] = 2] = "Technique";
    abilityType[abilityType["Passive"] = 3] = "Passive";
})(abilityType || (exports.abilityType = abilityType = {}));
