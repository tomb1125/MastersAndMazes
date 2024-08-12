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
exports.symetricEmpathicAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var symetricEmpathicAbilityObject = /** @class */ (function (_super) {
    __extends(symetricEmpathicAbilityObject, _super);
    function symetricEmpathicAbilityObject() {
        var _this = _super.call(this, 'Symetric Empathy') || this;
        _this.description = 'For the duration you can sense and send emotions to each other as long as you\' re close to each other. ';
        _this.rarity = 0.8;
        _this.prefix = 'Telepatic';
        _this.isCommunication = true;
        return _this;
    }
    return symetricEmpathicAbilityObject;
}(abilityObject_1.AbilityObject));
exports.symetricEmpathicAbilityObject = symetricEmpathicAbilityObject;
