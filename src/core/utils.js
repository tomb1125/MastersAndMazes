"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.random = function () {
        return Math.random();
    };
    ;
    //since High Accuracy and Low Accuracy attacks are easily exploitable. Thus we provide bonus to Medium Accuracy attacks.
    Utils.getDPSCoefficient = function (chance) {
        return 1 - 0.2 * Math.abs(0.5 - chance);
        //return 1;
    };
    Utils.DPS = 10;
    return Utils;
}());
exports.Utils = Utils;
