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
exports.warriorCorpseAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var warriorCorpseAbilityObject = /** @class */ (function (_super) {
    __extends(warriorCorpseAbilityObject, _super);
    function warriorCorpseAbilityObject() {
        var _this = _super.call(this, 'Warrior Corpse') || this;
        _this.description = 'any corpse of a warrior or someone with fighting spirit';
        _this.rarity = 0.8;
        _this.prefix = 'Warrior';
        _this.isCorpse = true;
        return _this;
    }
    return warriorCorpseAbilityObject;
}(abilityObject_1.AbilityObject));
exports.warriorCorpseAbilityObject = warriorCorpseAbilityObject;
