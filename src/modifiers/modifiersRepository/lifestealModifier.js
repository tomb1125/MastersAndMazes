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
exports.lifestealModifier = void 0;
var descriptiveNumberFactory_1 = require("../../components/descriptiveNumberFactory");
var modifier_1 = require("../modifier");
var lifestealModifier = /** @class */ (function (_super) {
    __extends(lifestealModifier, _super);
    function lifestealModifier() {
        var _this = _super.call(this) || this;
        _this.weight = 1;
        _this.type = modifier_1.Modifier.Type.Improvement;
        _this.name = 'Lifesteal';
        _this.numericComponents = descriptiveNumberFactory_1.DescriptiveNumberFactory.get(1);
        _this.namePrefix = 'Leeching';
        _this.description = 'When you hit, heal yourself equal to damage taken by enemy.';
        _this.powerMultiplier = function (x) { return 0.55; }; //TODO this should be bonus equal to damage... however damage is set after modifiers...s
        _this.longDescription = '';
        return _this;
    }
    return lifestealModifier;
}(modifier_1.Modifier));
exports.lifestealModifier = lifestealModifier;
