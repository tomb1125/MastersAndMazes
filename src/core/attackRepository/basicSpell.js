"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicSpell = void 0;
var classUtils_1 = require("../../characters/classUtils");
var attack_1 = require("../attack");
var characterContext_1 = require("../characterContext");
var utils_1 = require("../utils");
var basicSpell = /** @class */ (function (_super) {
    __extends(basicSpell, _super);
    function basicSpell(affector) {
        var _this = _super.call(this, 'Basic Spell') || this;
        _this.weight = function (x) {
            var classRoll = utils_1.Utils.D(characterContext_1.CharacterContext.classes.length) - 1;
            var primaryStat = classUtils_1.ClassUtils.getClass(characterContext_1.CharacterContext.Class[characterContext_1.CharacterContext.classes[classRoll]]).primaryAttribute;
            if ([characterContext_1.CharacterContext.Attribute.Intelligence, characterContext_1.CharacterContext.Attribute.Wisdom, characterContext_1.CharacterContext.Attribute.Charisma].includes(primaryStat)) {
                return 1;
            }
            else {
                return 0.2;
            }
        };
        _this.subtype = attack_1.Attack.Subtype.Spell;
        _this.coreDescription = 'When you hit, deal damage. ';
        _this.generate();
        return _this;
    }
    return basicSpell;
}(attack_1.Attack));
exports.basicSpell = basicSpell;
