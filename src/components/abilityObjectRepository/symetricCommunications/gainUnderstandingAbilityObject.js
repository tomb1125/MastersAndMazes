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
exports.gainUnderstandingAbilityObject = void 0;
var abilityObject_1 = require("../../abilityObject");
var gainUnderstandingAbilityObject = /** @class */ (function (_super) {
    __extends(gainUnderstandingAbilityObject, _super);
    function gainUnderstandingAbilityObject() {
        var _this = _super.call(this, 'Gain Understanding') || this;
        _this.description = 'For the duration you can both speak in your languages, yet you can understand each other. ';
        _this.rarity = 1;
        _this.prefix = 'Polyglotic';
        _this.isCommunication = true;
        return _this;
    }
    return gainUnderstandingAbilityObject;
}(abilityObject_1.AbilityObject));
exports.gainUnderstandingAbilityObject = gainUnderstandingAbilityObject;
