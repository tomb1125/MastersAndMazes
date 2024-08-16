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
exports.RogueClass = void 0;
var characterContext_1 = require("../../core/characterContext");
var classDetails_1 = require("../classDetails");
var RogueClass = /** @class */ (function (_super) {
    __extends(RogueClass, _super);
    function RogueClass() {
        var _this = _super.call(this) || this;
        _this.type = characterContext_1.CharacterContext.Class.Rogue;
        _this.primaryAttribute = characterContext_1.CharacterContext.Attribute.Dexterity;
        _this.secondaryAttribute = characterContext_1.CharacterContext.Attribute.Wisdom;
        return _this;
    }
    return RogueClass;
}(classDetails_1.ClassDetails));
exports.RogueClass = RogueClass;
