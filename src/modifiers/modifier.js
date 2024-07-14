"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modifier = void 0;
var Modifier = /** @class */ (function () {
    function Modifier(otherName) {
        this.powerBonus = function (x) { return 0; };
        this.powerMultiplier = function (x) { return 1; };
        this.weight = 1;
        this.chance = 1;
        this.weight = 1;
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    return Modifier;
}());
exports.Modifier = Modifier;
(function (Modifier) {
    var Type;
    (function (Type) {
        Type[Type["Constraint"] = 0] = "Constraint";
        Type[Type["Improvement"] = 1] = "Improvement";
        Type[Type["Effect"] = 2] = "Effect";
        Type[Type["Other"] = 3] = "Other";
    })(Type = Modifier.Type || (Modifier.Type = {}));
    var Element;
    (function (Element) {
        Element[Element["Fire"] = 0] = "Fire";
        Element[Element["Ice"] = 1] = "Ice";
        Element[Element["Physical"] = 2] = "Physical";
        Element[Element["Arcane"] = 3] = "Arcane";
        Element[Element["Holy"] = 4] = "Holy";
        Element[Element["Shadow"] = 5] = "Shadow";
        Element[Element["Psychic"] = 6] = "Psychic";
        Element[Element["Nature"] = 7] = "Nature";
        Element[Element["Lightning"] = 8] = "Lightning";
        Element[Element["Curse"] = 9] = "Curse";
    })(Element = Modifier.Element || (Modifier.Element = {}));
})(Modifier || (exports.Modifier = Modifier = {}));
