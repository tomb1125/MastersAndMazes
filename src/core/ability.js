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
        Type[Type["Utility"] = 4] = "Utility";
    })(Type = Ability.Type || (Ability.Type = {}));
    var Source;
    (function (Source) {
        Source[Source["Alchemical"] = 0] = "Alchemical";
        Source[Source["Arcane"] = 1] = "Arcane";
        Source[Source["Curse"] = 2] = "Curse";
        Source[Source["Holy"] = 3] = "Holy";
        Source[Source["Nature"] = 4] = "Nature";
        Source[Source["Psychic"] = 5] = "Psychic";
        Source[Source["Skill"] = 6] = "Skill";
        Source[Source["Shadow"] = 7] = "Shadow";
        Source[Source["Technology"] = 8] = "Technology";
    })(Source = Ability.Source || (Ability.Source = {}));
    var Element;
    (function (Element) {
        Element[Element["Dark"] = 0] = "Dark";
        Element[Element["Emotion"] = 1] = "Emotion";
        Element[Element["Fire"] = 2] = "Fire";
        Element[Element["Force"] = 3] = "Force";
        Element[Element["Ice"] = 4] = "Ice";
        Element[Element["Lightning"] = 5] = "Lightning";
        Element[Element["Physical"] = 6] = "Physical";
        Element[Element["Poison"] = 7] = "Poison";
        Element[Element["Radiant"] = 8] = "Radiant";
    })(Element = Ability.Element || (Ability.Element = {}));
    var Cooldown;
    (function (Cooldown) {
        Cooldown[Cooldown["Encounter"] = 0] = "Encounter";
        Cooldown[Cooldown["Daily"] = 1] = "Daily";
    })(Cooldown = Ability.Cooldown || (Ability.Cooldown = {}));
})(Ability || (exports.Ability = Ability = {}));
