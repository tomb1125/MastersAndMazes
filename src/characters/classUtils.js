"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassUtils = void 0;
var cleric_1 = require("./classes/cleric");
var rogue_1 = require("./classes/rogue");
var ClassUtils = /** @class */ (function () {
    function ClassUtils() {
    }
    ClassUtils.getClass = function (className) {
        if (className === 'Cleric') {
            return new cleric_1.ClericClass();
        }
        else if (className === 'Rogue') {
            return new rogue_1.RogueClass();
        }
        else {
            throw 'unsupported class ' + className;
        }
    };
    return ClassUtils;
}());
exports.ClassUtils = ClassUtils;
