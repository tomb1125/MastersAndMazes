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
exports.unfinishedBusinessAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var unfinishedBusinessAbilityObject = /** @class */ (function (_super) {
    __extends(unfinishedBusinessAbilityObject, _super);
    function unfinishedBusinessAbilityObject() {
        var _this = _super.call(this, 'Unfinished Business') || this;
        _this.description = 'any corpse of a person with unfinished business';
        _this.rarity = 1;
        _this.prefix = 'Completing';
        _this.isCorpse = true;
        return _this;
    }
    return unfinishedBusinessAbilityObject;
}(abilityObject_1.AbilityObject));
exports.unfinishedBusinessAbilityObject = unfinishedBusinessAbilityObject;
