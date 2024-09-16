"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = void 0;
var Rule = /** @class */ (function () {
    function Rule(name, description) {
        this.description = description;
        this.name = name;
    }
    return Rule;
}());
exports.Rule = Rule;
(function (Rule) {
    var Name;
    (function (Name) {
        Name[Name["ForcefulPush"] = 0] = "ForcefulPush";
        Name[Name["Blessing"] = 1] = "Blessing";
        Name[Name["FighterStance"] = 2] = "FighterStance";
    })(Name = Rule.Name || (Rule.Name = {}));
})(Rule || (exports.Rule = Rule = {}));
