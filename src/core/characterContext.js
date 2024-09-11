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
    CharacterContext.classes = [0];
    CharacterContext.OUT_OF_CLASS_WEIGHT = 0.0001; //TODO should be 0.01 after go-live
    CharacterContext.IN_CLASS_MODIFIER = 1.7;
    return CharacterContext;
}());
exports.CharacterContext = CharacterContext;
(function (CharacterContext) {
    var Class;
    (function (Class) {
        Class[Class["Cleric"] = 0] = "Cleric";
        Class[Class["Fighter"] = 1] = "Fighter";
        Class[Class["Paladin"] = 2] = "Paladin";
        Class[Class["Ranger"] = 3] = "Ranger";
        Class[Class["Rogue"] = 4] = "Rogue";
        Class[Class["Sorcerer"] = 5] = "Sorcerer";
        Class[Class["Druid"] = 6] = "Druid";
        Class[Class["Wizard"] = 7] = "Wizard";
        Class[Class["Assassin"] = 8] = "Assassin";
        Class[Class["Barbarian"] = 9] = "Barbarian";
        Class[Class["Bard"] = 10] = "Bard";
        Class[Class["Monk"] = 11] = "Monk";
        Class[Class["Runepriest"] = 12] = "Runepriest";
        Class[Class["Shaman"] = 13] = "Shaman";
        Class[Class["Swordmage"] = 14] = "Swordmage";
        Class[Class["Warlock"] = 15] = "Warlock";
    })(Class = CharacterContext.Class || (CharacterContext.Class = {}));
    var Attribute;
    (function (Attribute) {
        Attribute[Attribute["Strength"] = 0] = "Strength";
        Attribute[Attribute["Dexterity"] = 1] = "Dexterity";
        Attribute[Attribute["Constitution"] = 2] = "Constitution";
        Attribute[Attribute["Intelligence"] = 3] = "Intelligence";
        Attribute[Attribute["Wisdom"] = 4] = "Wisdom";
        Attribute[Attribute["Charisma"] = 5] = "Charisma"; //rare items
    })(Attribute = CharacterContext.Attribute || (CharacterContext.Attribute = {}));
    var Skill;
    (function (Skill) {
        Skill[Skill["Athletics"] = 0] = "Athletics";
        Skill[Skill["Intimidation"] = 1] = "Intimidation";
        Skill[Skill["Acrobatics"] = 2] = "Acrobatics";
        Skill[Skill["Stealth"] = 3] = "Stealth";
        Skill[Skill["Endurance"] = 4] = "Endurance";
        Skill[Skill["Survival"] = 5] = "Survival";
        Skill[Skill["Knowledge"] = 6] = "Knowledge";
        Skill[Skill["Crafting"] = 7] = "Crafting";
        Skill[Skill["Medicine"] = 8] = "Medicine";
        Skill[Skill["Perception"] = 9] = "Perception";
        Skill[Skill["Persuasion"] = 10] = "Persuasion";
        Skill[Skill["Streetwise"] = 11] = "Streetwise";
    })(Skill = CharacterContext.Skill || (CharacterContext.Skill = {}));
    var ArmorProficiency;
    (function (ArmorProficiency) {
        ArmorProficiency[ArmorProficiency["Heavy"] = 0] = "Heavy";
        ArmorProficiency[ArmorProficiency["Medium"] = 1] = "Medium";
        ArmorProficiency[ArmorProficiency["Light"] = 2] = "Light";
    })(ArmorProficiency = CharacterContext.ArmorProficiency || (CharacterContext.ArmorProficiency = {}));
})(CharacterContext || (exports.CharacterContext = CharacterContext = {}));
