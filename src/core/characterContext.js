"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterContext = void 0;
var utils_1 = require("./utils");
var CharacterContext = /** @class */ (function () {
    function CharacterContext() {
    }
    CharacterContext.getDPS = function () {
        return utils_1.Utils.getDPS(CharacterContext.level);
    };
    CharacterContext.level = 1;
    return CharacterContext;
}());
exports.CharacterContext = CharacterContext;
(function (CharacterContext) {
    var Class;
    (function (Class) {
        Class[Class["Cleric"] = 0] = "Cleric";
        Class[Class["Fighter"] = 1] = "Fighter";
        Class[Class["Leader"] = 2] = "Leader";
        Class[Class["Paladin"] = 3] = "Paladin";
        Class[Class["Ranger"] = 4] = "Ranger";
        Class[Class["Rogue"] = 5] = "Rogue";
        Class[Class["Warlock"] = 6] = "Warlock";
        Class[Class["Wizard"] = 7] = "Wizard";
        Class[Class["Assassin"] = 8] = "Assassin";
        Class[Class["Barbarian"] = 9] = "Barbarian";
        Class[Class["Bard"] = 10] = "Bard";
        Class[Class["Druid"] = 11] = "Druid";
        Class[Class["Monk"] = 12] = "Monk";
        Class[Class["Runepriest"] = 13] = "Runepriest";
        Class[Class["Shaman"] = 14] = "Shaman";
        Class[Class["Sorcerer"] = 15] = "Sorcerer";
    })(Class = CharacterContext.Class || (CharacterContext.Class = {}));
})(CharacterContext || (exports.CharacterContext = CharacterContext = {}));
