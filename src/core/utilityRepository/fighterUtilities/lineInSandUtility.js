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
exports.lineInSandUtility = void 0;
var descriptiveNumber_1 = require("../../../components/descriptiveNumber");
var characterContext_1 = require("../../characterContext");
var utility_1 = require("../../utility");
var lineInSandUtility = /** @class */ (function (_super) {
    __extends(lineInSandUtility, _super);
    function lineInSandUtility() {
        var _this = _super.call(this, 'Line in a Sand') || this;
        _this.weight = function () { return characterContext_1.CharacterContext.classes.includes(characterContext_1.CharacterContext.Class.Fighter) ? characterContext_1.CharacterContext.IN_CLASS_MODIFIER : characterContext_1.CharacterContext.OUT_OF_CLASS_WEIGHT; };
        _this.chance = 0.8; //TODO add value.
        _this.value = new descriptiveNumber_1.DescriptiveNumber(3);
        _this.compensate();
        _this.description = 'Draw a line on a ground, standing on one side of this line. In the current or nearest combat you gain 1 Boon for all Attacks against enemies who crossed the line to your side or made a ranged attack through it to your side. This does not work on enemies who crossed the line before combat (should you draw it too far). This bonus does not stack with other "Lines in Sand". ';
        return _this;
    }
    return lineInSandUtility;
}(utility_1.Utility));
exports.lineInSandUtility = lineInSandUtility;
