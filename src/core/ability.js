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
        Type[Type["Attack"] = 0] = "Attack";
        Type[Type["Technique"] = 1] = "Technique";
        Type[Type["Passive"] = 2] = "Passive";
        Type[Type["Utility"] = 3] = "Utility";
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
    var Attribute;
    (function (Attribute) {
        Attribute[Attribute["Strength"] = 0] = "Strength";
        Attribute[Attribute["Dexterity"] = 1] = "Dexterity";
        Attribute[Attribute["Constitution"] = 2] = "Constitution";
        Attribute[Attribute["Intelligence"] = 3] = "Intelligence";
        Attribute[Attribute["Wisdom"] = 4] = "Wisdom";
        Attribute[Attribute["Charisma"] = 5] = "Charisma";
    })(Attribute = Ability.Attribute || (Ability.Attribute = {}));
})(Ability || (exports.Ability = Ability = {}));
