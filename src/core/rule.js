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
    })(Name = Rule.Name || (Rule.Name = {}));
})(Rule || (exports.Rule = Rule = {}));
