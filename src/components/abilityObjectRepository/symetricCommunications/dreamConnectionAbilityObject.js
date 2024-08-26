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
exports.dreamConnectingAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var dreamConnectingAbilityObject = /** @class */ (function (_super) {
    __extends(dreamConnectingAbilityObject, _super);
    function dreamConnectingAbilityObject() {
        var _this = _super.call(this, 'Dream Connection') || this;
        _this.description = 'Upon casting the spell seemingly has no effect, but you will see the target in your dream tonight, and then you will be able to talk. ';
        _this.rarity = 0.6;
        _this.prefix = 'Dream Connecting';
        _this.isCommunication = true;
        return _this;
    }
    return dreamConnectingAbilityObject;
}(abilityObject_1.AbilityObject));
exports.dreamConnectingAbilityObject = dreamConnectingAbilityObject;
