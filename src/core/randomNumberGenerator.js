"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumberGenerator = void 0;
var RandomNumberGenerator = /** @class */ (function () {
    function RandomNumberGenerator(initSeed) {
        this.seed = 0;
        var i = 1;
        for (var _i = 0, initSeed_1 = initSeed; _i < initSeed_1.length; _i++) {
            var c = initSeed_1[_i];
            this.seed += c.charCodeAt(0) * i;
            i = (i + 50);
        }
    }
    RandomNumberGenerator.prototype.random = function () {
        this.seed += 1;
        var x = Math.sin(this.seed) * 100000;
        return x - Math.floor(x);
    };
    return RandomNumberGenerator;
}());
exports.RandomNumberGenerator = RandomNumberGenerator;
