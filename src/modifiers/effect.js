"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modifier = void 0;
var Modifier = /** @class */ (function () {
    function Modifier(otherName) {
        this.weight = 1;
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    return Modifier;
}());
exports.Modifier = Modifier;
