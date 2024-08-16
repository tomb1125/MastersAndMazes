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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillBonusUtility = void 0;
var classUtils_1 = require("../../characters/classUtils");
var descriptiveNumber_1 = require("../../components/descriptiveNumber");
var characterContext_1 = require("../characterContext");
var utility_1 = require("../utility");
var utils_1 = require("../utils");
var SkillBonusUtility = /** @class */ (function (_super) {
    __extends(SkillBonusUtility, _super);
    function SkillBonusUtility() {
        var _this = _super.call(this, 'Skill Bonus') || this;
        _this.weight = function () { return 1; };
        var boonNumbers = new descriptiveNumber_1.DescriptiveNumber(utils_1.Utils.D(3));
        _this.chance = 2 * Math.pow(5 / 6, boonNumbers.getValue());
        var skill;
        var roll = utils_1.Utils.random();
        if (roll < 0.5) {
            skill = __spreadArray([], __read(utils_1.Utils.SKILL_TO_ATTRIBUTE.keys()), false).filter(function (key) {
                utils_1.Utils.SKILL_TO_ATTRIBUTE[key] === classUtils_1.ClassUtils.getClass(characterContext_1.CharacterContext.Class[characterContext_1.CharacterContext.classes[utils_1.Utils.D(characterContext_1.CharacterContext.classes.length) - 1]]).primaryAttribute;
            }).sort(function () { return 0.5 - utils_1.Utils.random(); })[0];
        }
        else if (roll < 0.8) {
            skill = __spreadArray([], __read(utils_1.Utils.SKILL_TO_ATTRIBUTE.keys()), false).filter(function (key) {
                utils_1.Utils.SKILL_TO_ATTRIBUTE[key] === classUtils_1.ClassUtils.getClass(characterContext_1.CharacterContext.Class[characterContext_1.CharacterContext.classes[utils_1.Utils.D(characterContext_1.CharacterContext.classes.length) - 1]]).secondaryAttribute;
            }).sort(function () { return 0.5 - utils_1.Utils.random(); })[0];
        }
        else {
            skill = __spreadArray([], __read(utils_1.Utils.SKILL_TO_ATTRIBUTE.keys()), false).sort(function () { return 0.5 - utils_1.Utils.random(); })[0];
        }
        _this.description = 'For duration of an Encounter, gain ' + boonNumbers.getDescription() + ' Boons when rolling for ' + skill;
        _this.compensate();
        return _this;
    }
    return SkillBonusUtility;
}(utility_1.Utility));
exports.SkillBonusUtility = SkillBonusUtility;