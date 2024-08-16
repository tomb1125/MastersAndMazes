"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumberGenerator = void 0;
var RandomNumberGenerator = /** @class */ (function () {
    function RandomNumberGenerator(initSeed) {
        var e_1, _a;
        this.seed = 0;
        var i = 1;
        try {
            for (var initSeed_1 = __values(initSeed), initSeed_1_1 = initSeed_1.next(); !initSeed_1_1.done; initSeed_1_1 = initSeed_1.next()) {
                var c = initSeed_1_1.value;
                this.seed += c.charCodeAt(0) * i;
                i = (i + 50);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (initSeed_1_1 && !initSeed_1_1.done && (_a = initSeed_1.return)) _a.call(initSeed_1);
            }
            finally { if (e_1) throw e_1.error; }
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
