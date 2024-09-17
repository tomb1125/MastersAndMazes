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
exports.restedModifer = void 0;
var utils_1 = require("../../core/utils");
var modifier_1 = require("../modifier");
var restedModifer = /** @class */ (function (_super) {
    __extends(restedModifer, _super);
    function restedModifer(affector) {
        var _this = _super.call(this) || this;
        _this.powerMultiplier = function () { return 1.3; };
        _this.weight = function () { return utils_1.Utils.COMMON_MODIFIER; };
        _this.name = 'Rested';
        _this.namePrefix = 'Rested';
        _this.description = 'Can only be used if you managed to rest well during last night.';
        _this.longDescription = 'Camping in front of dungeon or having to keeping watch makes you not well reseted. Being well rested is usually only achieved by spending last night in room in a city.';
        _this.modifierType = modifier_1.Modifier.Type.Constraint;
        return _this;
    }
    return restedModifer;
}(modifier_1.Modifier));
exports.restedModifer = restedModifer;
