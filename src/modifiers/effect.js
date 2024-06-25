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
exports.Effect = void 0;
var modifier_1 = require("./modifier");
var Effect = /** @class */ (function (_super) {
    __extends(Effect, _super);
    function Effect(otherName) {
        var _this = _super.call(this, otherName) || this;
        _this.type = modifier_1.Modifier.Type.Effect;
        return _this;
    }
    return Effect;
}(modifier_1.Modifier));
exports.Effect = Effect;
(function (Effect) {
    var Subtype;
    (function (Subtype) {
        Subtype[Subtype["Buff"] = 0] = "Buff";
        Subtype[Subtype["Debuff"] = 1] = "Debuff";
        Subtype[Subtype["Single"] = 2] = "Single";
    })(Subtype = Effect.Subtype || (Effect.Subtype = {}));
})(Effect || (exports.Effect = Effect = {}));
