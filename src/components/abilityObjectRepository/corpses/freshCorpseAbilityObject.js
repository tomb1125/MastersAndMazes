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
exports.freshCorpseAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var freshCorpseAbilityObject = /** @class */ (function (_super) {
    __extends(freshCorpseAbilityObject, _super);
    function freshCorpseAbilityObject() {
        var _this = _super.call(this, 'Fresh Corpse') || this;
        _this.description = 'any fresh humanoid corpse (3 days or less)';
        _this.rarity = 1.1;
        _this.prefix = 'Fresh';
        _this.isCorpse = true;
        return _this;
    }
    return freshCorpseAbilityObject;
}(abilityObject_1.AbilityObject));
exports.freshCorpseAbilityObject = freshCorpseAbilityObject;
