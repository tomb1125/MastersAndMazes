"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassUtils = void 0;
var characterContext_1 = require("../core/characterContext");
var cleric_1 = require("./classes/cleric");
var rogue_1 = require("./classes/rogue");
var ClassUtils = /** @class */ (function () {
    function ClassUtils() {
    }
    ClassUtils.getClass = function (className) {
        if (className === 'Cleric') {
            return new cleric_1.ClericClass();
        }
        else if (className === 'Rogue') {
            return new rogue_1.RogueClass();
        }
        else {
            throw 'unsupported class ' + className;
        }
    };
    ClassUtils.SKILL_TO_ATTRIBUTE = new Map([
        [characterContext_1.CharacterContext.Skill.Athletics, characterContext_1.CharacterContext.Attribute.Strength],
        [characterContext_1.CharacterContext.Skill.Intimidation, characterContext_1.CharacterContext.Attribute.Strength],
        [characterContext_1.CharacterContext.Skill.SleightOfHand, characterContext_1.CharacterContext.Attribute.Dexterity],
        [characterContext_1.CharacterContext.Skill.Stealth, characterContext_1.CharacterContext.Attribute.Dexterity],
        [characterContext_1.CharacterContext.Skill.Endurance, characterContext_1.CharacterContext.Attribute.Constitution],
        [characterContext_1.CharacterContext.Skill.Survival, characterContext_1.CharacterContext.Attribute.Constitution],
        [characterContext_1.CharacterContext.Skill.Knowledge, characterContext_1.CharacterContext.Attribute.Intelligence],
        [characterContext_1.CharacterContext.Skill.Crafting, characterContext_1.CharacterContext.Attribute.Intelligence],
        [characterContext_1.CharacterContext.Skill.Dungeoneering, characterContext_1.CharacterContext.Attribute.Wisdom],
        [characterContext_1.CharacterContext.Skill.Perception, characterContext_1.CharacterContext.Attribute.Wisdom],
        [characterContext_1.CharacterContext.Skill.Persuasion, characterContext_1.CharacterContext.Attribute.Charisma],
        [characterContext_1.CharacterContext.Skill.Streetwise, characterContext_1.CharacterContext.Attribute.Charisma]
    ]);
    return ClassUtils;
}());
exports.ClassUtils = ClassUtils;
